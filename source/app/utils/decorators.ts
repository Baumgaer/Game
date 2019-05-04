import 'reflect-metadata';
import { merge } from 'lodash';

interface IWatchedParams {
    /**
     * Test
     *
     * @memberof IWatchedParams
     */
    onChange?: (oldValue: any, newValue: any) => void;

    /**
     * Test
     *
     * @memberof IWatchedParams
     */
    onInitial?: (value: any) => void;

    /**
     * Test
     *
     * @memberof IWatchedParams
     */
    onDelete?: () => void;

    /**
     * Test
     *
     * @memberof IWatchedParams
     */
    onAdd?: () => void;

    /**
     * Test
     *
     * @memberof IWatchedParams
     */
    onRemove?: () => void;

    /**
     * Test
     *
     * @type {*}
     * @memberof IWatchedParams
     */
    model?: any;
}
/**
 * Test
 *
 * @export
 * @param {IndexStructure} params
 * @returns {PropertyDecorator}
 */
export function watched(_params?: IWatchedParams): PropertyDecorator {
    return (target: any, key: string | Symbol) => {
        key = key.toString();
        // @ts-ignore
        let value = this[key];
        // Create new property with getter and setter
        Reflect.defineProperty(target, key, {
            get() {
                return value;
            },
            set(newVal: any) {
                if (newVal === value) return;
                value = newVal;
                key = key.toString();
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

/**
 * Constructs an object with its constParams with position constParamsIndex
 *
 * @export
 * @param {number} [constParamsIndex=0] Position of parameters which are used to initialize the object
 * @returns
 */
export function baseConstructor(constParamsIndex: number = 0) {
    return <T extends Constructor>(ctor: T) => {

        /**
         * Constructs an object with its constParams with position constParamsIndex
         *
         * @class BaseConstructor
         * @extends {ctor}
         */
        class BaseConstructor extends ctor {
            constructor(...args: any[]) {
                super(...args);
                merge(this, args[constParamsIndex]);
                if ("constructedCallback" in this) (<any>this).constructedCallback();
            }
        }

        return BaseConstructor;
    };
}
