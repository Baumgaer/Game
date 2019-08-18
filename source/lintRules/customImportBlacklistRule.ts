import * as Lint from "tslint"; // tslint:disable-line
import { findImports, ImportKind } from "tsutils";  // tslint:disable-line
import * as TS from "typescript";  // tslint:disable-line

interface IOptions {
    [fileOrDir: string]: string[];
}

/**
 * Bans certain imports in certain context
 *
 * @export
 * @class Rule
 * @extends {Lint.Rules.AbstractRule}
 */
export class Rule extends Lint.Rules.AbstractRule {

    /**
     * @inheritdoc
     *
     * @param {TS.SourceFile} sourceFile
     * @returns {Lint.RuleFailure[]}
     * @memberof Rule
     */
    public apply(sourceFile: TS.SourceFile): Lint.RuleFailure[] {
        return this.applyWithFunction(sourceFile, walk, this
            .ruleArguments[0] as IOptions);
    }
}

const walk = (ctx: Lint.WalkContext<IOptions>) => {
    for (const file in ctx.options) {
        if (ctx.options.hasOwnProperty(file) && ctx.sourceFile.fileName.includes(file)) {
            const forbiddenImports = (<any>ctx.options)[file];
            for (const importFile of findImports(ctx.sourceFile, ImportKind.All)) {
                for (const forbiddenImport of forbiddenImports) {
                    if (importFile.text.includes(forbiddenImport)) {
                        ctx.addFailure(
                            importFile.getStart(ctx.sourceFile) + 1,
                            importFile.end - 1,
                            `Imports from ${forbiddenImport} are black listet in context of ${file}`
                        );
                    }
                }
            }
        }
    }
};
