"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./../utils/requireOverride");
const chai_1 = require("chai");
const ConfigManager_1 = require("~server/lib/ConfigManager");
const perf_hooks_1 = require("perf_hooks");
describe('Tests for utils/projectStructure', function describe() {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3NwZWNzL0NvbmZpZ01hbmFnZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvQztBQUNwQywrQkFBOEI7QUFDOUIsNkRBQTBEO0FBQzFELDJDQUF5QztBQUV6QyxRQUFRLENBQUMsa0NBQWtDLEVBQUUsU0FBUyxRQUFRO0lBQzFELE1BQU0sY0FBYyxHQUFHO1FBQ25CLGdCQUFnQixFQUFFLG9CQUFvQjtRQUN0Qyw2QkFBNkIsRUFBRSxRQUFRO1FBQ3ZDLFlBQVksRUFBRSxLQUFLO1FBQ25CLE1BQU0sRUFBRSxJQUFJO1FBQ1osS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0tBQ3RCLENBQUM7SUFFRixFQUFFLENBQUMsaUNBQWlDLEVBQUUsU0FBUyxJQUFJLENBQUMsSUFBSTtRQUNwRCxNQUFNLGFBQWEsR0FBRyw2QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xELE1BQU0sS0FBSyxHQUFHLHdCQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN0QyxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDL0MsTUFBTSxLQUFLLEdBQUcsd0JBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVoQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUM1QyxhQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sTUFBTSxHQUFHLHdCQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2pDLGFBQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLEVBQUUsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxTQUFTLElBQUk7UUFDckMsTUFBTSxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxhQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3RGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==