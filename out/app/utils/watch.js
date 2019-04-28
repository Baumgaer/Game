"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function watched() {
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
                key = key.toString();
                value = newVal;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL3V0aWxzL3dhdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsU0FBZ0IsT0FBTztJQUNuQixPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUd0QixPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDaEMsR0FBRztnQkFFQyxPQUFPLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBQ0QsR0FBRyxDQUFDLE1BQVc7Z0JBQ1gsSUFBSSxNQUFNLEtBQUssS0FBSztvQkFBRSxPQUFPO2dCQUM3QixHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUVyQixLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUVmLElBQUksTUFBTSxZQUFZLFdBQVc7b0JBQzdCLENBQUMsQ0FBQyxHQUFHLElBQVUsTUFBTSxDQUFDLFdBQVksQ0FBQyxpQkFBaUIsQ0FBQztvQkFDdkMsSUFBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxNQUFNO29CQUNwQyxJQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBQ0QsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQTVCRCwwQkE0QkMifQ==