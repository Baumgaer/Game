import { expect } from 'chai';
import { resolve } from 'path';
import { path as rootPath } from 'app-root-path';
import { isSourceFile, isOnClientSide, getCorrespondingFile } from './../utils/projectStructure';

describe('Tests for utils/projectStructure', function() {
    let sourceNotClientFilePath = './source/app/server/test.ts';
    let sourceClientFilePath = './source/app/client/ts/test.ts';
    let outClientFilePath = './out/app/client/js/test.js';

    it('should detect a source file', function() {
        expect(isSourceFile(sourceClientFilePath)).to.be.true;
    });

    it('Should detect a client file', function() {
        expect(isOnClientSide(sourceClientFilePath)).to.be.true;
    });

    it('Should detect a not client file', function() {
        expect(isOnClientSide(sourceNotClientFilePath)).to.be.false;
    });

    it('should return the corresponding file path', function() {
        expect(getCorrespondingFile(sourceClientFilePath)).to.equal(resolve(rootPath, outClientFilePath));
    });

    it('should return the corresponding file path of a not source file', function() {
        expect(getCorrespondingFile(outClientFilePath)).to.equal(resolve(rootPath, sourceClientFilePath));
    });
});
