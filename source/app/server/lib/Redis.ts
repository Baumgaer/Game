import * as IORedis from 'ioredis';
import { merge, isUndefined, pickBy, omit } from 'lodash';

export type callbackType = (err: Error, res: number) => void;
export type messageType = Array<
    | keyof any
    | boolean
    | IMessageType
    | {
        [name: string]: keyof any | boolean | messageType;
    }
>;
interface IMessageType extends messageType {}

/**
 * Extends the IORedis class by saving all subscribed topics to execute them
 * later by receiving a message.
 *
 * @export
 * @class Redis
 * @extends {IORedis}
 */
export class Redis extends IORedis {
    /**
     * This will be used in the RedisClientManager
     *
     * @type {string}
     * @memberof Redis
     */
    public id: string = '';

    /**
     * Contains all subscribed topics with corresponding callback
     *
     * @type {Map<string, Array<Function>>}
     * @memberof Redis
     */
    public topics: Map<string, Array<Function>> = new Map();

    /**
     * @inheritdoc
     *
     * Subscribes to a topic with callback which should be executed
     * on receiving a message
     *
     * @param {(Array<string> | string)} topics
     * @param {Function} callback
     * @memberof Redis
     */
    public subscribe(topics: Array<string> | string, callback: Function): void {
        if (!Array.isArray(topics)) {
            topics = [topics];
        }
        for (const topic of topics) {
            this.insertIntoTopics(topic, callback);
        }
        super.subscribe(topics);
    }
    /**
     * Stores the subscribed topics to execute callbacks on message receive
     *
     * @private
     * @param {string} topic
     * @param {Function} callback
     * @memberof Redis
     */
    private insertIntoTopics(topic: string, callback: Function) {
        let savedTopic = this.topics.get(topic);
        if (!savedTopic) savedTopic = [];
        savedTopic.push(callback);
        this.topics.set(topic, savedTopic);
    }

    /**
     * @inheritdoc
     *
     * A comfortable version of the normal publish method
     *
     * @param {string} topic
     * @param {messageType} params NOTE: Functions are NOT allowed!
     * @param {callbackType} [callback]
     * @memberof Redis
     */
    // @ts-ignore
    public publish(topic: string, params: messageType, callback?: callbackType): void {
        super.publish(topic, params.toString(), callback || ((_error: Error, _res: number) => {}));
    }

    /**
     * @inheritdoc
     *
     * @param {IORedis.KeyType} key
     * @returns {(Promise<IndexStructure | null>)}
     * @memberof Redis
     */
    //@ts-ignore
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
     * @param {IORedis.KeyType} key
     * @param {*} value
     * @param {(string | any[])} [expiryMode]
     * @param {(string | number)} [time]
     * @param {(string | number)} [setMode]
     * @returns {Promise<string>}
     * @memberof Redis
     */
    //@ts-ignore
    public set(key: IORedis.KeyType, value: IndexStructure): Promise<string> {
        return new Promise<string>(async (resolve) => {
            resolve(await super.set(key, JSON.stringify(value)));
        });
    }

    /**
     * Updates a stored value with given value. Deletes the property when in
     * value a property is set to undefined explicity.
     *
     * @param {IORedis.KeyType} key
     * @param {IndexStructure} value
     * @returns {Promise<string>}
     * @memberof Redis
     */
    public update(key: IORedis.KeyType, value: IndexStructure): Promise<string> {
        return new Promise<string>(async (resolve) => {
            let propsToRemove = pickBy(value, isUndefined);
            value = omit(merge(await this.get(key), value), Object.keys(propsToRemove));
            resolve(await this.set(key, value));
        });
    }
}
