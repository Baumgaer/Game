import 'reflect-metadata';
import { merge } from 'lodash';

interface IWatchedParams {
    /**
     * Test
     *
     * @memberof IWatchedParams
     */
    onChange?: (newValue: any, oldValue: any) => void;

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
    attachTo?: string;
}
/**
 * Test
 *
 * @export
 * @param {IndexStructure} params
 * @returns {PropertyDecorator}
 */
export function watched(_params?: IWatchedParams): PropertyDecorator {
    return (target: any, key: string | symbol) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        // Create new property with getter and setter
        Reflect.defineProperty(target, key, {
            get: function get() {
                return this.value;
            },
            set: function set(newVal: any) {
                if (newVal === this.value) return;
                if (propDesc && propDesc.set) propDesc.set.call(this, newVal);
                this.value = newVal;
            },
            enumerable: true,
            configurable: true
        });
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
                let constParams = args[constParamsIndex];
                if (!(constParams instanceof Object)) constParams = {};
                merge(this, constParams[constParamsIndex]);
                if ("constructedCallback" in this) (<any>this).constructedCallback();
            }
        }

        return BaseConstructor;
    };
}
