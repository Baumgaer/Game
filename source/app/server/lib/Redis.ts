import IORedis from 'ioredis';
import { merge, isUndefined, pickBy, omit } from '~bdo/utils/util';

export type messageType = (
    | keyof any
    | boolean
    | messageType
    | {
        [name: string]: keyof any | boolean | messageType;
    })[];

/**
 * Extends the IORedis class by saving all subscribed topics to execute them
 * later by receiving a message.
 *
 * @extends IORedis
 */
export class Redis extends IORedis {
    /**
     * This will be used in the RedisClientManager
     *
     * @memberof Redis
     */
    public id = '';

    /**
     * Contains all subscribed topics with corresponding callback
     *
     * @type {Map<string, Function[]>}
     * @memberof Redis
     */
    public topics: Map<string, AnyFunction[]> = new Map();

    /**
     * @inheritdoc
     *
     * @param topics The topics which should use the callback when received
     * @param callback The function which will be executed when a given topic is received
     * @memberof Redis
     */
    // eslint-disable-next-line
    // @ts-ignore
    public subscribe(topics: string | string[], callback: AnyFunction): void {
        if (!Array.isArray(topics)) topics = [topics];
        if (callback) {
            for (const topic of topics) {
                this.insertIntoTopics(topic, callback);
            }
        }
        super.subscribe(topics);
    }

    /**
     * @inheritdoc
     * @param topic The topic which should be published to the world
     * @param params The parameters of the subscriber function which will receive this topic. NOTE: Functions are NOT allowed!
     * @memberof Redis
     */
    // eslint-disable-next-line
    // @ts-ignore
    public publish(topic: string, params: messageType): void {
        super.publish(topic, JSON.stringify(params));
    }

    /**
     * @inheritdoc
     *
     * @param key The key to load from the redis storeThis callback is for third party compatibility
     * @returns The Value in the redis store if available and null else
     * @memberof Redis
     */
    // eslint-disable-next-line
    // @ts-ignore
    public get(key: IORedis.KeyType): Promise<IndexStructure | null> {
        return new Promise<IndexStructure | null>((resolve, reject) => {
            super.get(key, (error, response) => {
                if (error) return reject(error);
                if (response) return resolve(JSON.parse(response));
                resolve(null);
            });
        });
    }

    /**
     * @inheritdoc
     *
     * @param key The key to set in the redis store
     * @param value The value of the key which should be set
     * @returns An "OK" if everything was successful
     * @memberof Redis
     */
    // eslint-disable-next-line
    // @ts-ignore
    public set(key: IORedis.KeyType, value: IndexStructure | IORedis.ValueType): Promise<string | null> {
        return new Promise(async (resolve) => {
            if (typeof value === "number" || typeof value === "string" || value instanceof Array || value instanceof Buffer) {
                resolve(await super.set(key, value));
            } else resolve(await super.set(key, JSON.stringify(value)));
        });
    }

    /**
     * Updates a stored value with given value. Deletes the property when in
     * value a property is set to undefined explicity.
     *
     * @param key The key in the redis store
     * @param value The new value of the key
     * @returns An "OK" if everything was successful
     * @memberof Redis
     */
    public async update(key: IORedis.KeyType, value: IndexStructure): Promise<string | null> {
        const propsToRemove = pickBy(value, isUndefined);
        value = omit(merge(await this.get(key), value), Object.keys(propsToRemove));
        return await this.set(key, value);
    }

    /**
     * Stores the subscribed topics to execute callbacks on message receive
     *
     * @private
     * @param topic The topic which should be stored
     * @param callback The corresponding callback of the topic
     * @memberof Redis
     */
    private insertIntoTopics(topic: string, callback: AnyFunction) {
        let savedTopic = this.topics.get(topic);
        if (!savedTopic) savedTopic = [];
        savedTopic.push(callback);
        this.topics.set(topic, savedTopic);
    }
}
