"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lint = require("tslint");
const tsutils_1 = require("tsutils");
class Rule extends Lint.Rules.AbstractRule {
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
                for (const forbiddenImport of forbiddenImports) {
                    if (importFile.text.includes(forbiddenImport)) {
                        ctx.addFailure(importFile.getStart(ctx.sourceFile) + 1, importFile.end - 1, `Imports from ${forbiddenImport} are black listet in context of ${file}`);
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tSW1wb3J0QmxhY2tsaXN0UnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saW50UnVsZXMvY3VzdG9tSW1wb3J0QmxhY2tsaXN0UnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUMvQixxQ0FBa0Q7QUFjbEQsTUFBYSxJQUFLLFNBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO0lBU3RDLEtBQUssQ0FBQyxVQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUk7YUFDL0MsYUFBYSxDQUFDLENBQUMsQ0FBYSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNKO0FBYkQsb0JBYUM7QUFFRCxNQUFNLElBQUksR0FBRyxDQUFDLEdBQStCLEVBQUUsRUFBRTtJQUM3QyxLQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7UUFDNUIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUUsTUFBTSxnQkFBZ0IsR0FBUyxHQUFHLENBQUMsT0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xELEtBQUssTUFBTSxVQUFVLElBQUkscUJBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFpQixFQUFFO2dCQUNsRSxLQUFLLE1BQU0sZUFBZSxJQUFJLGdCQUFnQixFQUFFO29CQUM1QyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO3dCQUMzQyxHQUFHLENBQUMsVUFBVSxDQUNWLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFDdkMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQ2xCLGdCQUFnQixlQUFlLG1DQUFtQyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQztxQkFDTDtpQkFDSjthQUNKO1NBQ0o7S0FDSjtBQUNMLENBQUMsQ0FBQyJ9