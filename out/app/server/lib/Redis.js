"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IORedis = require("ioredis");
const lodash_1 = require("lodash");
class Redis extends IORedis {
    constructor() {
        super(...arguments);
        this.id = '';
        this.topics = new Map();
    }
    subscribe(topics, callback) {
        if (!Array.isArray(topics)) {
            topics = [topics];
        }
        for (const topic of topics) {
            this.insertIntoTopics(topic, callback);
        }
        super.subscribe(topics);
    }
    insertIntoTopics(topic, callback) {
        let savedTopic = this.topics.get(topic);
        if (!savedTopic)
            savedTopic = [];
        savedTopic.push(callback);
        this.topics.set(topic, savedTopic);
    }
    publish(topic, params, callback) {
        super.publish(topic, params.toString(), callback || ((_error, _res) => { }));
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
            resolve(await super.set(key, JSON.stringify(value)));
        });
    }
    update(key, value) {
        return new Promise(async (resolve) => {
            let propsToRemove = lodash_1.pickBy(value, lodash_1.isUndefined);
            value = lodash_1.omit(lodash_1.merge(await this.get(key), value), Object.keys(propsToRemove));
            resolve(await this.set(key, value));
        });
    }
}
exports.Redis = Redis;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVkaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zb3VyY2UvYXBwL3NlcnZlci9saWIvUmVkaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsbUNBQTBEO0FBcUIxRCxNQUFhLEtBQU0sU0FBUSxPQUFPO0lBQWxDOztRQU9XLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFRaEIsV0FBTSxHQUFpQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBdUc1RCxDQUFDO0lBM0ZVLFNBQVMsQ0FBQyxNQUE4QixFQUFFLFFBQWtCO1FBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMxQztRQUNELEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQVNPLGdCQUFnQixDQUFDLEtBQWEsRUFBRSxRQUFrQjtRQUN0RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVTtZQUFFLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDakMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQWFNLE9BQU8sQ0FBQyxLQUFhLEVBQUUsTUFBbUIsRUFBRSxRQUF1QjtRQUN0RSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxJQUFJLENBQUMsQ0FBQyxNQUFhLEVBQUUsSUFBWSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFVTSxHQUFHLENBQUMsR0FBb0I7UUFDM0IsT0FBTyxJQUFJLE9BQU8sQ0FBd0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDMUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQy9CLElBQUksS0FBSztvQkFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxRQUFRO29CQUFFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBY00sR0FBRyxDQUFDLEdBQW9CLEVBQUUsS0FBcUI7UUFDbEQsT0FBTyxJQUFJLE9BQU8sQ0FBUyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDekMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBV00sTUFBTSxDQUFDLEdBQW9CLEVBQUUsS0FBcUI7UUFDckQsT0FBTyxJQUFJLE9BQU8sQ0FBUyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDekMsSUFBSSxhQUFhLEdBQUcsZUFBTSxDQUFDLEtBQUssRUFBRSxvQkFBVyxDQUFDLENBQUM7WUFDL0MsS0FBSyxHQUFHLGFBQUksQ0FBQyxjQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUM1RSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBdEhELHNCQXNIQyJ9