"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslint_1 = require("tslint");
const tsutils_1 = require("tsutils");
class Rule extends tslint_1.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this
            .ruleArguments[0]);
    }
}
exports.Rule = Rule;
const walk = (ctx) => {
    for (const file in ctx.options) {
        if (ctx.options.hasOwnProperty(file) && ctx.sourceFile.fileName.includes(file)) {
            const forbiddenImports = ctx.options[file];
            for (const importFile of tsutils_1.findImports(ctx.sourceFile, 63)) {
                if (importFile.parent.importClause.isTypeOnly)
                    continue;
                for (const forbiddenImport of forbiddenImports) {
                    if (importFile.text.includes(forbiddenImport)) {
                        ctx.addFailure(importFile.getStart(ctx.sourceFile) + 1, importFile.end - 1, `Imports from ${forbiddenImport} are black listet in context of ${file}`);
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tSW1wb3J0QmxhY2tsaXN0UnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saW50UnVsZXMvY3VzdG9tSW1wb3J0QmxhY2tsaXN0UnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1DQUF5RDtBQUN6RCxxQ0FBa0Q7QUFjbEQsTUFBYSxJQUFLLFNBQVEsY0FBSyxDQUFDLFlBQVk7SUFTakMsS0FBSyxDQUFDLFVBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSTthQUMvQyxhQUFhLENBQUMsQ0FBQyxDQUFhLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0o7QUFiRCxvQkFhQztBQUVELE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBMEIsRUFBRSxFQUFFO0lBQ3hDLEtBQUssTUFBTSxJQUFJLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtRQUM1QixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1RSxNQUFNLGdCQUFnQixHQUFTLEdBQUcsQ0FBQyxPQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsS0FBSyxNQUFNLFVBQVUsSUFBSSxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQWlCLEVBQUU7Z0JBRWxFLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVTtvQkFBRSxTQUFTO2dCQUN4RCxLQUFLLE1BQU0sZUFBZSxJQUFJLGdCQUFnQixFQUFFO29CQUM1QyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO3dCQUMzQyxHQUFHLENBQUMsVUFBVSxDQUNWLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFDdkMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQ2xCLGdCQUFnQixlQUFlLG1DQUFtQyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQztxQkFDTDtpQkFDSjthQUNKO1NBQ0o7S0FDSjtBQUNMLENBQUMsQ0FBQyJ9