"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./../utils/requireOverride");
const chai_1 = require("chai");
const ConfigManager_1 = require("~server/lib/ConfigManager");
const perf_hooks_1 = require("perf_hooks");
const lodash_1 = require("lodash");
describe('Tests for app/server/lib/ConfigManager', function describe() {
    const expectedObject = {
        shouldBeOriginal: 'should be original',
        shouldBeOverwrittenWithServer: 'Server',
        aBooleanTest: false,
        aFloat: 3.15,
        anInt: 42,
        anArray: ['4', '2']
    };
    it('should collect the right config', function test(done) {
        const configManager = ConfigManager_1.ConfigManager.getInstance();
        const start = perf_hooks_1.performance.now();
        configManager.get('spec').then((config) => {
            chai_1.expect(config).to.deep.include(expectedObject);
            const first = perf_hooks_1.performance.now();
            configManager.get('spec').then((cachedConfig) => {
                chai_1.expect(cachedConfig).to.deep.eq(config);
                const second = perf_hooks_1.performance.now();
                chai_1.expect(second - first).to.be.lessThan(first - start);
                done();
            });
        });
    });
    it('should throw an error', function test() {
        const configManager = ConfigManager_1.ConfigManager.getInstance();
        chai_1.expect(configManager.set.bind('test')).to.throw(Error, 'Method not implemented.');
    });
    it('should load the clients spec config', function test(done) {
        const configManager = ConfigManager_1.ConfigManager.getInstance();
        const clientExpectedObject = {};
        lodash_1.merge(clientExpectedObject, expectedObject, {
            shouldBeOverwrittenWithServer: 'Nop, client!'
        });
        configManager.getForClient('spec').then((result) => {
            chai_1.expect(result).to.deep.eq(clientExpectedObject);
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL3NwZWNzL0NvbmZpZ01hbmFnZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvQztBQUNwQywrQkFBOEI7QUFDOUIsNkRBQTBEO0FBQzFELDJDQUF5QztBQUN6QyxtQ0FBK0I7QUFFL0IsUUFBUSxDQUFDLHdDQUF3QyxFQUFFLFNBQVMsUUFBUTtJQUNoRSxNQUFNLGNBQWMsR0FBRztRQUNuQixnQkFBZ0IsRUFBRSxvQkFBb0I7UUFDdEMsNkJBQTZCLEVBQUUsUUFBUTtRQUN2QyxZQUFZLEVBQUUsS0FBSztRQUNuQixNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztLQUN0QixDQUFDO0lBRUYsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLFNBQVMsSUFBSSxDQUFDLElBQUk7UUFDcEQsTUFBTSxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxNQUFNLEtBQUssR0FBRyx3QkFBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdEMsYUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sS0FBSyxHQUFHLHdCQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFaEMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDNUMsYUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLE1BQU0sR0FBRyx3QkFBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNqQyxhQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDckQsSUFBSSxFQUFFLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdUJBQXVCLEVBQUUsU0FBUyxJQUFJO1FBQ3JDLE1BQU0sYUFBYSxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEQsYUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUN0RixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxTQUFTLElBQUksQ0FBQyxJQUFJO1FBQ3hELE1BQU0sYUFBYSxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEQsTUFBTSxvQkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDaEMsY0FBSyxDQUFDLG9CQUFvQixFQUFFLGNBQWMsRUFBRTtZQUN4Qyw2QkFBNkIsRUFBRSxjQUFjO1NBQ2hELENBQUMsQ0FBQztRQUNILGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDL0MsYUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDaEQsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==