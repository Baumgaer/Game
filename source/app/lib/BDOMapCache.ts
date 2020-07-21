/**
 * Builds an object with data and duration for the cache
 *
 * @class Entity
 */
class Entity<V> {
    /**
     * Data which should be stored
     *
     * @type {*}
     * @memberof Entity
     */
    public data: V;
    /**
     * Time when the data expires
     *
     * @type {number}
     * @memberof Entity
     */
    private expire: number = Infinity;

    constructor(data: V, duration?: number) {
        this.data = data;
        this.expire = new Date().getTime() + (duration || Infinity);
    }

    /**
     * Determines the expiration of the entity
     *
     * @readonly
     * @type {boolean}
     * @memberof Entity
     */
    get expired(): boolean {
        return this.expire ? this.expire < new Date().getTime() : false;
    }
}

/**
 * Caches the given key for a certain amount of time
 *
 * @template K The type of the key
 * @template V The type of the value
 * @extends Map
 */
export class BDOMapCache<K, V> extends Map<K, Entity<V>> {
    /**
     * @inheritdoc
     *
     * @param key The key to set or overwrite
     * @param value The value to set for the key
     * @param duration time in milliseconds to expiration if not given it will be Infinity
     * @returns This instance
     * @memberof BDOMapCache
     */
    // eslint-disable-next-line
    // @ts-ignore
    public set(key: K, value: V, duration?: number): this {
        const entity = new Entity(value, duration);
        return super.set(key, entity);
    }

    /**
     * @inheritdoc
     *
     * @param key The key to get
     * @returns The value of the key
     * @memberof BDOMapCache
     */
    public get(key: K): any {
        const entity = super.get(key);
        if (entity === undefined || entity.expired) {
            this.delete(key);
            return undefined;
        }
        return entity.data;
    }
}
