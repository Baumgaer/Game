export interface IManager<T> {
    /**
     * Holds the instance of the manager to ensure it is a singleton
     *
     * @type {T}
     * @memberof IManager
     */
    instance?: T;

    /**
     * Creates a new instance for the singleton manager
     *
     * @returns {T} the created or available instance
     * @memberof IManager
     */
    getInstance(params?: ConstParams<T>): T;
}
