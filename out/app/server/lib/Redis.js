"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ioredis_1 = tslib_1.__importDefault(require("ioredis"));
const util_1 = require("~bdo/utils/util");
class Redis extends ioredis_1.default {
    constructor() {
        super(...arguments);
        this.id = '';
        this.topics = new Map();
    }
    subscribe(topics, callback) {
        if (!Array.isArray(topics))
            topics = [topics];
        if (callback) {
            for (const topic of topics) {
                this.insertIntoTopics(topic, callback);
            }
        }
        return super.subscribe(...topics);
    }
    publish(topic, params) {
        super.publish(topic, JSON.stringify(params));
    }
    get(key) {
        return new Promise((resolve, reject) => {
            super.get(key, (error, response) => {
                if (error)
                    return reject(error);
                if (response)
                    return resolve(JSON.parse(response));
                resolve(null);
            });
        });
    }
    set(key, value) {
        return new Promise(async (resolve) => {
            if (typeof value === "number" || typeof value === "string" || value instanceof Array || value instanceof Buffer) {
                resolve(await super.set(key, value));
            }
            else
                resolve(await super.set(key, JSON.stringify(value)));
        });
    }
    update(key, value) {
        return new Promise(async (resolve) => {
            const propsToRemove = util_1.pickBy(value, util_1.isUndefined);
            value = util_1.omit(util_1.merge(await this.get(key), value), Object.keys(propsToRemove));
            resolve(await this.set(key, value));
        });
    }
    insertIntoTopics(topic, callback) {
        let savedTopic = this.topics.get(topic);
        if (!savedTopic)
            savedTopic = [];
        savedTopic.push(callback);
        this.topics.set(topic, savedTopic);
    }
}
exports.Redis = Redis;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVkaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zb3VyY2UvYXBwL3NlcnZlci9saWIvUmVkaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThCO0FBQzlCLDBDQUFtRTtBQW1CbkUsTUFBYSxLQUFNLFNBQVEsaUJBQU87SUFBbEM7O1FBT1csT0FBRSxHQUFXLEVBQUUsQ0FBQztRQVFoQixXQUFNLEdBQTRCLElBQUksR0FBRyxFQUFFLENBQUM7SUE2SHZELENBQUM7SUE5RlUsU0FBUyxDQUFDLE1BQXlCLEVBQUUsUUFBbUI7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQUUsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxRQUFRLEVBQUU7WUFDVixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQzthQUMxQztTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQWFNLE9BQU8sQ0FBQyxLQUFhLEVBQUUsTUFBbUI7UUFDN0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFXTSxHQUFHLENBQUMsR0FBb0I7UUFDM0IsT0FBTyxJQUFJLE9BQU8sQ0FBd0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDMUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQy9CLElBQUksS0FBSztvQkFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxRQUFRO29CQUFFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBYU0sR0FBRyxDQUFDLEdBQW9CLEVBQUUsS0FBeUM7UUFDdEUsT0FBTyxJQUFJLE9BQU8sQ0FBUyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDekMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssWUFBWSxLQUFLLElBQUksS0FBSyxZQUFZLE1BQU0sRUFBRTtnQkFDN0csT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN4Qzs7Z0JBQU0sT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBV00sTUFBTSxDQUFDLEdBQW9CLEVBQUUsS0FBcUI7UUFDckQsT0FBTyxJQUFJLE9BQU8sQ0FBUyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDekMsTUFBTSxhQUFhLEdBQUcsYUFBTSxDQUFDLEtBQUssRUFBRSxrQkFBVyxDQUFDLENBQUM7WUFDakQsS0FBSyxHQUFHLFdBQUksQ0FBQyxZQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUM1RSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVVPLGdCQUFnQixDQUFDLEtBQWEsRUFBRSxRQUFrQjtRQUN0RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVTtZQUFFLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDakMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNKO0FBNUlELHNCQTRJQyJ9