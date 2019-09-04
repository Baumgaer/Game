"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ioredis_1 = tslib_1.__importDefault(require("ioredis"));
const lodash_1 = require("lodash");
class Redis extends ioredis_1.default {
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
            resolve(await super.set(key, JSON.stringify(value)));
        });
    }
    update(key, value) {
        return new Promise(async (resolve) => {
            const propsToRemove = lodash_1.pickBy(value, lodash_1.isUndefined);
            value = lodash_1.omit(lodash_1.merge(await this.get(key), value), Object.keys(propsToRemove));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVkaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zb3VyY2UvYXBwL3NlcnZlci9saWIvUmVkaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThCO0FBQzlCLG1DQUEwRDtBQXVCMUQsTUFBYSxLQUFNLFNBQVEsaUJBQU87SUFBbEM7O1FBT1csT0FBRSxHQUFXLEVBQUUsQ0FBQztRQVFoQixXQUFNLEdBQTRCLElBQUksR0FBRyxFQUFFLENBQUM7SUF3R3ZELENBQUM7SUE1RlUsU0FBUyxDQUFDLE1BQXlCLEVBQUUsUUFBa0I7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEIsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckI7UUFDRCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBYU0sT0FBTyxDQUFDLEtBQWEsRUFBRSxNQUFtQjtRQUM3QyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQVdNLEdBQUcsQ0FBQyxHQUFvQjtRQUMzQixPQUFPLElBQUksT0FBTyxDQUF3QixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMxRCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxLQUFLO29CQUFFLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLFFBQVE7b0JBQUUsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFhTSxHQUFHLENBQUMsR0FBb0IsRUFBRSxLQUFxQjtRQUNsRCxPQUFPLElBQUksT0FBTyxDQUFTLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUN6QyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFXTSxNQUFNLENBQUMsR0FBb0IsRUFBRSxLQUFxQjtRQUNyRCxPQUFPLElBQUksT0FBTyxDQUFTLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUN6QyxNQUFNLGFBQWEsR0FBRyxlQUFNLENBQUMsS0FBSyxFQUFFLG9CQUFXLENBQUMsQ0FBQztZQUNqRCxLQUFLLEdBQUcsYUFBSSxDQUFDLGNBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBVU8sZ0JBQWdCLENBQUMsS0FBYSxFQUFFLFFBQWtCO1FBQ3RELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVO1lBQUUsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNqQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0o7QUF2SEQsc0JBdUhDIn0=