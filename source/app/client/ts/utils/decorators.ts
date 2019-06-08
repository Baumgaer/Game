import 'reflect-metadata';

/**
 * Marks an component property as a real property and avoids setting the
 * corresponding attribute. Also it maintains the "properties" values of a
 * component.
 *
 * @export
 * @returns {PropertyDecorator}
 */
export function property(): PropertyDecorator {
    return (target: any, key: string | symbol) => {
        // Get previous defined property descriptor for chaining
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);

        // Define metadata for access to properties like this.attributes
        if (!Reflect.hasMetadata("definedProperties", target)) {
            Reflect.defineMetadata("definedProperties", new Array<string>(), target);
        }
        const propertyMap: string[] = Reflect.getMetadata("definedProperties", target);
        propertyMap.push(key.toString());

        // Define new metadata property
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal: any) {
                if (newVal === Reflect.getMetadata(key, this)) return;

                // Set value of property
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                } else Reflect.defineMetadata(key, newVal, this);
            },
            enumerable: true,
            configurable: true
        });
    };
}

/**
 * Marks a component property as a real attribute and reflects the set values
 * to the attribute dom even it is not a native attribute.
 *
 * @export
 * @returns {PropertyDecorator}
 */
export function attribute(): PropertyDecorator {
    return (target: any, key: string | symbol) => {
        // Get previous defined property descriptor for chaining
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);

        // Define new metadata property
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal: any) {
                if (newVal === Reflect.getMetadata(key, this)) return;
                const stringKey = key.toString();

                // Prefer in DOM defined attributes on initialization
                if (!Reflect.getMetadata(`${key.toString()}Initialized`, this)) {
                    newVal = (<HTMLElement>this).getAttribute(stringKey) || newVal;
                }

                // Set the value of the property
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                } else Reflect.defineMetadata(key, newVal, this);

                // Reflect property changes to attribute
                if (target instanceof HTMLElement && (<HTMLElement>this).getAttribute(stringKey) !== newVal) {
                    (<HTMLElement>this).setAttribute(stringKey, newVal);
                }

                // Mark as initialized to prevent static attribute
                Reflect.defineMetadata(`${key.toString()}Initialized`, true, this);
            },
            enumerable: true,
            configurable: true
        });
    };
}
