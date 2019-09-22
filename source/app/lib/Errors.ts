/**
 * This is used to determine that an error ocurred while setting a value
 *
 * @export
 * @class ValueError
 * @extends {Error}
 */
export class ValueError extends Error { }

/**
 * This is used to determine that a type error occurred
 *
 * @export
 * @class TypeError
 * @extends {Error}
 */
export class TypeError extends Error { }

/**
 * This is used when a configuration conflict happens for example in the
 * attribute decorator => autosave: true and doNotPersist: true.
 *
 * @export
 * @class ConfigurationError
 * @extends {Error}
 */
export class ConfigurationError extends Error { }
