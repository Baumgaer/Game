"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Watched_1 = require("~bdo/lib/Watched");
const util_1 = require("~bdo/utils/util");
const metadata_1 = require("~bdo/utils/metadata");
const on_change_1 = tslib_1.__importDefault(require("on-change"));
const lodash_1 = require("lodash");
class Field {
    constructor(object, property) {
        this.fields = [];
        this.object = object;
        this.property = property;
    }
    addField(field) {
        if (this.fields.includes(field))
            return;
        if (field.object && field.object.isBDOModel) {
            const arrayObjProxy = this.getArrayObjectProxy(field.valueOf());
            this.value = arrayObjProxy;
            this.oldValue = arrayObjProxy;
        }
        if (field instanceof Watched_1.Watched && field.subObject)
            this.redefineValue(field.subObject);
        this.redefineValue(field);
        this.fields.push(field);
    }
    removeField(field) {
        if (!this.fields.includes(field))
            return;
        if (field instanceof Watched_1.Watched && field.subObject)
            this.restoreValue(field.subObject);
        this.restoreValue(field);
        util_1.removeElementFromArray(this.fields, field);
    }
    setValue(value) {
        for (const field of this.fields)
            field.setValue(value);
    }
    valueOf() {
        return this.value;
    }
    getOldValue() {
        return this.oldValue;
    }
    redefineValue(field) {
        metadata_1.defineWildcardMetadata(field, "value", field.valueOf());
        const that = this;
        Reflect.deleteProperty(field, "value");
        Reflect.defineProperty(field, "value", {
            get() {
                return that.value;
            },
            set(value) {
                value = util_1.getProxyTarget(value);
                const thatValue = util_1.getProxyTarget(that.value);
                if (value === thatValue)
                    return;
                that.oldValue = thatValue;
                that.value = that.getArrayObjectProxy(value);
                ;
            },
            configurable: true,
            enumerable: true
        });
    }
    restoreValue(field) {
        Reflect.deleteProperty(field, "value");
        field.setValue(util_1.getProxyTarget(this.value));
    }
    getArrayObjectProxy(value) {
        if (value instanceof Array || lodash_1.isObject(value)) {
            value = on_change_1.default.target(value);
            return on_change_1.default(value, (path, changedValue, previousValue) => {
                this.oldValue = previousValue;
                for (const field of this.fields) {
                    field.proxyHandler(path, changedValue, previousValue, false);
                }
            });
        }
        return value;
    }
}
exports.Field = Field;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL2xpYi9GaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSw4Q0FBMkM7QUFFM0MsMENBQXlFO0FBQ3pFLGtEQUE2RDtBQUM3RCxrRUFBaUM7QUFDakMsbUNBQWtDO0FBUWxDLE1BQWEsS0FBSztJQVlkLFlBQVksTUFBUyxFQUFFLFFBQVc7UUFGMUIsV0FBTSxHQUFpQyxFQUFFLENBQUM7UUFHOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUE0QjtRQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDeEMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFlLEtBQUssQ0FBQyxNQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3JELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztTQUNqQztRQUNELElBQUksS0FBSyxZQUFZLGlCQUFPLElBQUksS0FBSyxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxXQUFXLENBQUMsS0FBNEI7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDekMsSUFBSSxLQUFLLFlBQVksaUJBQU8sSUFBSSxLQUFLLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsNkJBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQWdDO1FBQzVDLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxhQUFhLENBQUMsS0FBNEI7UUFDOUMsaUNBQXNCLENBQVMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFO1lBQ25DLEdBQUc7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUM7WUFDRCxHQUFHLENBQUMsS0FBVztnQkFDWCxLQUFLLEdBQUcscUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxTQUFTLEdBQUcscUJBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLElBQUksS0FBSyxLQUFLLFNBQVM7b0JBQUUsT0FBTztnQkFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUFBLENBQUM7WUFDbEQsQ0FBQztZQUNELFlBQVksRUFBRSxJQUFJO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBNEI7UUFDN0MsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxxQkFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxLQUFXO1FBQ25DLElBQUksS0FBSyxZQUFZLEtBQUssSUFBSSxpQkFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNDLEtBQUssR0FBRyxtQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixPQUFPLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsRUFBRTtnQkFDekQsSUFBSSxDQUFDLFFBQVEsR0FBUyxhQUFhLENBQUM7Z0JBQ3BDLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDN0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQVEsWUFBWSxFQUFRLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDNUU7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUNKO0FBckZELHNCQXFGQyJ9