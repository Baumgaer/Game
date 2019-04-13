"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
describe('Tests for utils/projectStructure', function describe() {
    it('should require the right file', function test() {
        const originalRequire = require;
        require('./../utils/requireOverride');
        const ConfigManager = require('~server/lib/ConfigManager');
        require = originalRequire;
        chai_1.expect(ConfigManager).to.be.an('object');
        chai_1.expect(Object.keys(ConfigManager)).includes('ConfigManager');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZU92ZXJyaWRlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zb3VyY2Uvc3BlY3MvcmVxdWlyZU92ZXJyaWRlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFOUIsUUFBUSxDQUFDLGtDQUFrQyxFQUFFLFNBQVMsUUFBUTtJQUMxRCxFQUFFLENBQUMsK0JBQStCLEVBQUUsU0FBUyxJQUFJO1FBQzdDLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQztRQUNoQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN0QyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUMzRCxPQUFPLEdBQUcsZUFBZSxDQUFDO1FBQzFCLGFBQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxhQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=