"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Attribute_1 = require("~bdo/lib/Attribute");
const Modification_1 = require("~bdo/lib/Modification");
const util_1 = require("~bdo/utils/util");
const on_change_1 = tslib_1.__importDefault(require("on-change"));
const lodash_1 = require("lodash");
const clone_deep_1 = tslib_1.__importDefault(require("clone-deep"));
class Watched {
    constructor(object, property, params) {
        this.isShallow = false;
        this.isInitialized = false;
        this.object = object;
        this.property = property;
        const capitalizedProp = util_1.ucFirst(property);
        const onInitFunc = `on${capitalizedProp}Init`;
        const onChangeFunc = `on${capitalizedProp}Change`;
        const onAddFunc = `on${capitalizedProp}Add`;
        const onRemoveFunc = `on${capitalizedProp}Remove`;
        this.onInit = params ? params.onInit || onInitFunc : onInitFunc;
        this.onChange = params ? params.onChange || onChangeFunc : onChangeFunc;
        this.onAdd = params ? params.onAdd || onAddFunc : onAddFunc;
        this.onRemove = params ? params.onRemove || onRemoveFunc : onRemoveFunc;
        this.isShallow = params ? Boolean(params.isShallow) : false;
    }
    setValue(value) {
        let oldVal = this.valueOf();
        if (oldVal === value || (this.subObject && !this.subObject.disableTypeGuard && !this.subObject.typeGuard(value)))
            return;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        oldVal = clone_deep_1.default(oldVal);
        valueToPass = this.getArrayObjectProxy(valueToPass);
        if (value instanceof Modification_1.Modification) {
            value.setValue(valueToPass);
            valueToPass = value;
        }
        if (this.subObject) {
            this.subObject.setValue(valueToPass);
        }
        else
            this.value = valueToPass;
        if (this.executeReactionFunction(value) && this.onChange in this.object && this.isInitialized) {
            this.object[this.onChange](oldVal);
        }
        if (this.executeReactionFunction(value) && this.onInit in this.object && !this.isInitialized) {
            this.object[this.onInit](valueToPass);
        }
        this.isInitialized = true;
    }
    valueOf() {
        if (this.subObject)
            return this.subObject.valueOf();
        return this.value;
    }
    setSubObject(subObject) {
        let value = this.valueOf();
        if (value)
            value = on_change_1.default.unsubscribe(value);
        value = this.getArrayObjectProxy(value);
        this.subObject = subObject;
        this.subObject.setValue(value);
    }
    executeReactionFunction(value) {
        if (this.object.isBDOModel && value instanceof Modification_1.Modification && value.type === "update") {
            if (this.subObject && this.subObject instanceof Attribute_1.Attribute && this.subObject.unsavedChange)
                return false;
        }
        return true;
    }
    getArrayObjectProxy(value) {
        if (value instanceof Array || lodash_1.isObject(value)) {
            return on_change_1.default(value, (path, changedValue, previousValue) => {
                const newKeys = Object.keys(changedValue);
                const oldKeys = Object.keys(previousValue);
                const newLen = newKeys.length;
                const oldLen = oldKeys.length;
                this.caseDetectExec({
                    len1: newLen,
                    len2: oldLen,
                    func: this.onAdd,
                    keys1: newKeys,
                    keys2: oldKeys,
                    changedValue,
                    path
                });
                this.caseDetectExec({
                    len1: oldLen,
                    len2: newLen,
                    func: this.onRemove,
                    keys1: oldKeys,
                    keys2: newKeys,
                    changedValue,
                    path
                });
                if (newLen === oldLen && this.onChange in this && this.isInitialized) {
                    this.object[this.onChange](changedValue, path);
                }
            }, { isShallow: this.isShallow });
        }
        return value;
    }
    caseDetectExec(cdParams) {
        if (cdParams.len1 > cdParams.len2 && cdParams.func in this.object) {
            for (const modified of cdParams.keys1) {
                if (!cdParams.keys2.includes(modified)) {
                    this.object[cdParams.func]((cdParams.changedValue)[modified], cdParams.path);
                    break;
                }
            }
        }
    }
}
exports.Watched = Watched;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2F0Y2hlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbGliL1dhdGNoZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esa0RBQStDO0FBQy9DLHdEQUFxRDtBQUNyRCwwQ0FBMEM7QUFDMUMsa0VBQWlDO0FBQ2pDLG1DQUFrQztBQUNsQyxvRUFBbUM7QUE4SG5DLE1BQWEsT0FBTztJQTBGaEIsWUFBWSxNQUFTLEVBQUUsUUFBVyxFQUFFLE1BQXVCO1FBckJwRCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBbUJ4QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUdyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixNQUFNLGVBQWUsR0FBRyxjQUFPLENBQUMsUUFBa0IsQ0FBQyxDQUFDO1FBRXBELE1BQU0sVUFBVSxHQUFHLEtBQUssZUFBZSxNQUFNLENBQUM7UUFDOUMsTUFBTSxZQUFZLEdBQUcsS0FBSyxlQUFlLFFBQVEsQ0FBQztRQUNsRCxNQUFNLFNBQVMsR0FBRyxLQUFLLGVBQWUsS0FBSyxDQUFDO1FBQzVDLE1BQU0sWUFBWSxHQUFHLEtBQUssZUFBZSxRQUFRLENBQUM7UUFFbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFB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