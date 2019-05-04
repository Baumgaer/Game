"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL3V0aWxzL3dhdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZUEsU0FBZ0IsT0FBTyxDQUFDLE9BQXFCO0lBQ3pDLE9BQU8sQ0FBQyxNQUFXLEVBQUUsR0FBb0IsRUFBRSxFQUFFO1FBQ3pDLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNoQyxHQUFHO2dCQUNDLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFDRCxHQUFHLENBQUMsTUFBVztnQkFDWCxJQUFJLE1BQU0sS0FBSyxLQUFLO29CQUFFLE9BQU87Z0JBQzdCLEtBQUssR0FBRyxNQUFNLENBQUM7Z0JBQ2YsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFckIsSUFBSSxNQUFNLFlBQVksV0FBVztvQkFDN0IsQ0FBQyxDQUFDLEdBQUcsSUFBVSxNQUFNLENBQUMsV0FBWSxDQUFDLGlCQUFpQixDQUFDO29CQUN2QyxJQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLE1BQU07b0JBQ3BDLElBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25ELENBQUM7WUFDRCxVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDLENBQUM7QUFDTixDQUFDO0FBekJELDBCQXlCQyJ9