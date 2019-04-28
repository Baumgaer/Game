/**
 * Test
 *
 * @export
 * @param {IndexStructure} params
 * @returns {PropertyDecorator}
 */
export function watched(): PropertyDecorator {
    return (target: any, key: string | Symbol) => {
        key = key.toString();
        // @ts-ignore
        let value = this[key];

        // Create new property with getter and setter
        Reflect.defineProperty(target, key, {
            get() {
                // console.log(`Get: ${key} => ${value}`);
                return value;
            },
            set(newVal: any) {
                if (newVal === value) return;
                key = key.toString();
                // console.log(`Set: ${key} => from ${value} to ${newVal}`);
                value = newVal;
                // Reflect property changes to attribute
                if (target instanceof HTMLElement &&
                    !(key in (<any>target.constructor).definedProperties) &&
                    (<HTMLElement>this).getAttribute(key) !== newVal
                ) (<HTMLElement>this).setAttribute(key, value);
            },
            enumerable: true,
            configurable: true
        });
        return target;
    };
}
