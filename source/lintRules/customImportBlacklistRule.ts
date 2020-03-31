/* tslint:disable no-implicit-dependencies  */
import { Rules, RuleFailure, WalkContext } from "tslint";
import { findImports, ImportKind } from "tsutils";
import TS from "typescript";

interface IOptions {
    [fileOrDir: string]: string[];
}

/**
 * Bans certain imports in certain context
 *
 * @export
 * @class Rule
 * @extends {Rules.AbstractRule}
 */
export class Rule extends Rules.AbstractRule {

    /**
     * @inheritdoc
     *
     * @param {TS.SourceFile} sourceFile
     * @returns {Lint.RuleFailure[]}
     * @memberof Rule
     */
    public apply(sourceFile: TS.SourceFile): RuleFailure[] {
        return this.applyWithFunction(sourceFile, walk, this
            .ruleArguments[0] as IOptions);
    }
}

const walk = (ctx: WalkContext<IOptions>) => {
    for (const file in ctx.options) {
        if (ctx.options.hasOwnProperty(file) && ctx.sourceFile.fileName.includes(file)) {
            const forbiddenImports = (<any>ctx.options)[file];
            for (const importFile of findImports(ctx.sourceFile, ImportKind.All)) {
                // @ts-ignore
                if (!importFile.parent.importClause || importFile.parent.importClause.isTypeOnly) continue;
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
