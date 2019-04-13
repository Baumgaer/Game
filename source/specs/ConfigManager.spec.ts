import './../utils/requireOverride';
import { expect } from 'chai';
import { ConfigManager } from '~server/lib/ConfigManager';
import { performance } from 'perf_hooks';

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
        const configManager = ConfigManager.getInstance();
        const start = performance.now();
        configManager.get('spec').then((config) => {
            expect(config).to.deep.include(expectedObject);
            const first = performance.now();
            // Test if cache result is the same
            configManager.get('spec').then((cachedConfig) => {
                expect(cachedConfig).to.deep.eq(config);
                const second = performance.now();
                expect(second - first).to.be.lessThan(first - start);
                done();
            });
        });
    });

    it('should throw an error', function test() {
        const configManager = ConfigManager.getInstance();
        expect(configManager.set.bind('test')).to.throw(Error, 'Method not implemented.');
    });
});
