import { expect } from 'chai';
import { resolve } from 'path';
import { path as rootPath } from 'app-root-path';
import { isSourceFile, isOnClientSide, getCorrespondingFile, walk } from './../utils/projectStructure';

describe('Tests for utils/projectStructure', function describe() {
    const sourceNotClientFilePath = './source/app/server/test.ts';
    const sourceClientFilePath = './source/app/client/ts/test.ts';
    const outClientFilePath = './out/app/client/js/test.js';

    it('should detect a source file', function test() {
        expect(isSourceFile(sourceClientFilePath)).to.be.true;
    });

    it('Should detect a client file', function test() {
        expect(isOnClientSide(sourceClientFilePath)).to.be.true;
    });

    it('Should detect a not client file', function test() {
        expect(isOnClientSide(sourceNotClientFilePath)).to.be.false;
    });

    it('should return the corresponding file path', function test() {
        expect(getCorrespondingFile(sourceClientFilePath)).to.equal(resolve(rootPath, outClientFilePath));
    });

    it('should return the corresponding file path of a not source file', function test() {
        expect(getCorrespondingFile(outClientFilePath)).to.equal(resolve(rootPath, sourceClientFilePath));
    });

    it('should walk the deep path test asset with all files', function test(done) {
        const files: string[] = [];
        walk(resolve(rootPath, 'source', 'specs', 'testAssets', 'deepPath'), (file) => {
            files.push(file);
        }).then((paths) => {
            expect(files).to.be.not.empty;
            expect(paths).to.be.not.empty;
            expect(paths).members(files);
            done();
        });
    });
});
