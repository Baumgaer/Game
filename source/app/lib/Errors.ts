/**
 * This is used to determine that an error ocurred while setting a value
 *
 * @extends Error
 */
export class ValueError extends Error { }

/**
 * This is used to determine that a type error occurred
 *
 * @extends Error
 */
export class TypeError extends Error { }

/**
 * This is used when a configuration conflict happens for example in the
 * attribute decorator => autosave: true and doNotPersist: true.
 *
 * @extends Error
 */
export class ConfigurationError extends Error { }
