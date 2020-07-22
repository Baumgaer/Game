
Object.defineProperty(exports, "__esModule", { value: true }); // eslint-disable-line

const containsPath = require('contains-path'); // eslint-disable-line
const path = require('path'); // eslint-disable-line

const resolve = require('eslint-module-utils/resolve').default; // eslint-disable-line
const isStaticRequire = require("eslint-plugin-import/lib/core/staticRequire").default; // eslint-disable-line
const docsUrl = require('eslint-plugin-import/lib/docsUrl').default; // eslint-disable-line
const importType = require('eslint-plugin-import/lib/core/importType').default; // eslint-disable-line

module.exports = { // eslint-disable-line
    meta: {
        type: 'problem',
        docs: {
            url: docsUrl('no-restricted-paths')
        },

        schema: [
            {
                type: 'object',
                properties: {
                    zones: {
                        type: 'array',
                        minItems: 1,
                        items: {
                            type: 'object',
                            properties: {
                                target: { type: 'string' },
                                from: { type: 'string' },
                                except: {
                                    type: 'array',
                                    items: {
                                        type: 'string'
                                    },
                                    uniqueItems: true
                                },
                                message: { type: 'string' }
                            },
                            additionalProperties: false
                        }
                    },
                    basePath: { type: 'string' }
                },
                additionalProperties: false
            }
        ]
    },

    create: function noRestrictedPaths(context) {
        const options = context.options[0] || {};
        const restrictedPaths = options.zones || [];
        const basePath = options.basePath || process.cwd(); // eslint-disable-line
        const currentFilename = context.getFilename();
        const matchingZones = restrictedPaths.filter((zone) => {
            const targetPath = path.resolve(basePath, zone.target);

            return containsPath(currentFilename, targetPath);
        });

        /**
         * @param absoluteFromPath The import path
         * @param absoluteExceptionPath The import path which is allowed
         * @returns true if is valid
         */
        function isValidExceptionPath(absoluteFromPath, absoluteExceptionPath) {
            const relativeExceptionPath = path.relative(absoluteFromPath, absoluteExceptionPath);

            return importType(relativeExceptionPath, context) !== 'parent';
        }

        /**
         * @param node current traversal node
         */
        function reportInvalidExceptionPath(node) {
            context.report({
                node,
                message: 'Restricted path exceptions must be descendants of the configured `from` path for that zone.'
            });
        }

        /**
         * @param importPath the path part of the node
         * @param node the current traversal path
         */
        function checkForRestrictedImportPath(importPath, node) {
            if (node.parent.importKind === "type") return;
            const absoluteImportPath = resolve(importPath, context);

            if (!absoluteImportPath) {
                return;
            }

            matchingZones.forEach((zone) => {
                const exceptionPaths = zone.except || [];
                const absoluteFrom = path.resolve(basePath, zone.from);

                if (!containsPath(absoluteImportPath, absoluteFrom)) {
                    return;
                }

                const absoluteExceptionPaths = exceptionPaths.map((exceptionPath) =>
                    path.resolve(absoluteFrom, exceptionPath)
                );
                const hasValidExceptionPaths = absoluteExceptionPaths
                    .every((absoluteExceptionPath) => isValidExceptionPath(absoluteFrom, absoluteExceptionPath));

                if (!hasValidExceptionPaths) {
                    reportInvalidExceptionPath(node);
                    return;
                }

                const pathIsExcepted = absoluteExceptionPaths
                    .some((absoluteExceptionPath) => containsPath(absoluteImportPath, absoluteExceptionPath));

                if (pathIsExcepted) {
                    return;
                }

                context.report({
                    node,
                    message: `Unexpected path "{{importPath}}" imported in restricted zone.${zone.message ? ` ${zone.message}` : ''}`,
                    data: { importPath }
                });
            });
        }

        return {
            ImportDeclaration(node) {
                checkForRestrictedImportPath(node.source.value, node.source);
            },
            CallExpression(node) {
                if (isStaticRequire(node)) {
                    const [firstArgument] = node.arguments;

                    checkForRestrictedImportPath(firstArgument.value, firstArgument);
                }
            }
        };
    }
};
