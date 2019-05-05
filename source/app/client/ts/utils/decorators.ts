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
        // Define metadata for access to properties like this.attributes
        const propertyMap = new Map<string, any>();
        if (!Reflect.hasMetadata("definedProperties", target)) {
            Reflect.defineMetadata("definedProperties", propertyMap, target);
        }
        Reflect.getMetadata("definedProperties", target);
        propertyMap.set(key.toString(), target.constructor[key]);
        // Define new metadata property
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal: any) {
                if (newVal === Reflect.getMetadata(key, this)) return;
                // Set value of property
                Reflect.defineMetadata(key, newVal, this);
                // Update property metadata
                propertyMap.set(key.toString(), newVal);
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
        // Define new metadata property
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal: any) {
                if (newVal === Reflect.getMetadata(key, this)) return;
                key = key.toString();
                // Prefer in DOM defined attributes on initialization
                if (!(<any>this).initialized) newVal = (<HTMLElement>this).getAttribute(key) || newVal;
                // Set the value of the property
                Reflect.defineMetadata(key, newVal, this);
                // Reflect property changes to attribute
                if (target instanceof HTMLElement && (<HTMLElement>this).getAttribute(key) !== newVal) {
                    (<HTMLElement>this).setAttribute(key, newVal);
                }
                // Mark as initialized to prevent static attribute
                (<any>this).initialized = true;
            },
            enumerable: true,
            configurable: true
        });
    };
}
