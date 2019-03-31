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
    data: V;
    /**
     * Time when the data expires
     *
     * @type {number}
     * @memberof Entity
     */
    expire: number = Infinity;

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
 * @export
 * @class BDOMapCache
 * @extends {Map}
 */
export class BDOMapCache<K, V> extends Map<K, Entity<V>> {
    /**
     * @inheritdoc
     *
     * @param {K} key
     * @param {V} value
     * @param {number} [duration] time in seconds to expiration if not given it will be Infinity
     * @returns {this}
     * @memberof BDOMapCache
     */
    //@ts-ignore
    public set(key: K, value: V, duration?: number): this {
        let entity = new Entity(value, duration);
        return super.set(key, entity);
    }

    /**
     * @inheritdoc
     *
     * @param {*} key
     * @returns {*}
     * @memberof BDOMapCache
     */
    public get(key: K): any {
        let entity = super.get(key);
        if (entity === undefined || entity.expired) {
            this.delete(key);
            return undefined;
        }
        return entity.data;
    }
}
