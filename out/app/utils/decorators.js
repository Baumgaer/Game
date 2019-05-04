"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const lodash_1 = require("lodash");
function watched(_params) {
    return (target, key) => {
        key = key.toString();
        let value = this[key];
        Reflect.defineProperty(target, key, {
            get() {
                return value;
            },
            set(newVal) {
                if (newVal === value)
                    return;
                value = newVal;
                key = key.toString();
                if (target instanceof HTMLElement &&
                    !(key in target.constructor.definedProperties) &&
                    this.getAttribute(key) !== newVal)
                    this.setAttribute(key, value);
            },
            enumerable: true,
            configurable: true
        });
        return target;
    };
}
exports.watched = watched;
function baseConstructor(constParamsIndex = 0) {
    return (ctor) => {
        class BaseConstructor extends ctor {
            constructor(...args) {
                super(...args);
                lodash_1.merge(this, args[constParamsIndex]);
                if ("constructedCallback" in this)
                    this.constructedCallback();
            }
        }
        return BaseConstructor;
    };
}
exports.baseConstructor = baseConstructor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQixtQ0FBK0I7QUFxRC9CLFNBQWdCLE9BQU8sQ0FBQyxPQUF3QjtJQUM1QyxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDaEMsR0FBRztnQkFDQyxPQUFPLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBQ0QsR0FBRyxDQUFDLE1BQVc7Z0JBQ1gsSUFBSSxNQUFNLEtBQUssS0FBSztvQkFBRSxPQUFPO2dCQUM3QixLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUNmLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRXJCLElBQUksTUFBTSxZQUFZLFdBQVc7b0JBQzdCLENBQUMsQ0FBQyxHQUFHLElBQVUsTUFBTSxDQUFDLFdBQVksQ0FBQyxpQkFBaUIsQ0FBQztvQkFDdkMsSUFBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxNQUFNO29CQUNwQyxJQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBQ0QsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQXpCRCwwQkF5QkM7QUFTRCxTQUFnQixlQUFlLENBQUMsbUJBQTJCLENBQUM7SUFDeEQsT0FBTyxDQUF3QixJQUFPLEVBQUUsRUFBRTtRQVF0QyxNQUFNLGVBQWdCLFNBQVEsSUFBSTtZQUM5QixZQUFZLEdBQUcsSUFBVztnQkFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ2YsY0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLHFCQUFxQixJQUFJLElBQUk7b0JBQVEsSUFBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDekUsQ0FBQztTQUNKO1FBRUQsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQW5CRCwwQ0FtQkMifQ==