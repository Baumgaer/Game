/**
 * Marks an component property as a real property and avoids setting the
 * corresponding attribute. Also it maintains the "properties" values of a
 * component.
 *
 * @export
 * @returns {PropertyDecorator}
 */
export function property(): PropertyDecorator {
    return (target: any, key: string | Symbol) => {
        if (key instanceof Symbol) key = key.toString();
        let value = target.constructor[key];
        target.constructor.definedProperties[key] = value;
        Reflect.defineProperty(target, key, {
            get: () => {
                return value;
            },
            set: (val: any) => {
                value = val;
                target.constructor.definedProperties[key.toString()] = value;
            },
            enumerable: true,
            configurable: true
        });
        return target;
    };
}
