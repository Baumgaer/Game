"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint"); // tslint:disable-line
var tsutils_1 = require("tsutils"); // tslint:disable-line
/**
 * Bans certain imports in certain context
 *
 * @export
 * @class Rule
 * @extends {Lint.Rules.AbstractRule}
 */
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritdoc
     *
     * @param {TS.SourceFile} sourceFile
     * @returns {Lint.RuleFailure[]}
     * @memberof Rule
     */
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this
            .ruleArguments[0]);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var walk = function (ctx) {
    for (var file in ctx.options) {
        if (ctx.options.hasOwnProperty(file) && ctx.sourceFile.fileName.includes(file)) {
            var forbiddenImports = ctx.options[file];
            for (var _i = 0, _a = tsutils_1.findImports(ctx.sourceFile, 63 /* All */); _i < _a.length; _i++) {
                var importFile = _a[_i];
                for (var _b = 0, forbiddenImports_1 = forbiddenImports; _b < forbiddenImports_1.length; _b++) {
                    var forbiddenImport = forbiddenImports_1[_b];
                    if (importFile.text.includes(forbiddenImport)) {
                        ctx.addFailure(importFile.getStart(ctx.sourceFile) + 1, importFile.end - 1, "Imports from " + forbiddenImport + " are black listet in context of " + file);
                    }
                }
            }
        }
    }
};
