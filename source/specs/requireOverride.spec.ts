import { expect } from 'chai';

describe('Tests for utils/projectStructure', function describe() {
    it('should require the right file', function test() {
        const originalRequire = require;
        require('./../utils/requireOverride');
        const ConfigManager = require('~server/lib/ConfigManager');
        require = originalRequire;
        expect(ConfigManager).to.be.an('object');
        expect(Object.keys(ConfigManager)).includes('ConfigManager');
    });
});
