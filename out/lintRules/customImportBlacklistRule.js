"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Lint = tslib_1.__importStar(require("tslint"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tSW1wb3J0QmxhY2tsaXN0UnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saW50UnVsZXMvY3VzdG9tSW1wb3J0QmxhY2tsaXN0UnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBK0I7QUFDL0IscUNBQWtEO0FBY2xELE1BQWEsSUFBSyxTQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtJQVN0QyxLQUFLLENBQUMsVUFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJO2FBQy9DLGFBQWEsQ0FBQyxDQUFDLENBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDSjtBQWJELG9CQWFDO0FBRUQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUErQixFQUFFLEVBQUU7SUFDN0MsS0FBSyxNQUFNLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO1FBQzVCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVFLE1BQU0sZ0JBQWdCLEdBQVMsR0FBRyxDQUFDLE9BQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxLQUFLLE1BQU0sVUFBVSxJQUFJLHFCQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBaUIsRUFBRTtnQkFDbEUsS0FBSyxNQUFNLGVBQWUsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDNUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTt3QkFDM0MsR0FBRyxDQUFDLFVBQVUsQ0FDVixVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQ3ZDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUNsQixnQkFBZ0IsZUFBZSxtQ0FBbUMsSUFBSSxFQUFFLENBQzNFLENBQUM7cUJBQ0w7aUJBQ0o7YUFDSjtTQUNKO0tBQ0o7QUFDTCxDQUFDLENBQUMifQ==