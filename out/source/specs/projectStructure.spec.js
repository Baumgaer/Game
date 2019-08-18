"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const graceful_fs_1 = require("graceful-fs");
const projectStructure_1 = require("./../utils/projectStructure");
describe('Tests for utils/projectStructure', function describe() {
    const sourceNotClientFilePath = './source/app/server/test.ts';
    const sourceClientFilePath = './source/app/client/ts/test.ts';
    const outClientFilePath = './out/app/client/js/test.js';
    it('should detect a source file', function test() {
        chai_1.expect(projectStructure_1.isSourceFile(sourceClientFilePath)).to.be.true;
    });
    it('Should detect a client file', function test() {
        chai_1.expect(projectStructure_1.isOnClientSide(sourceClientFilePath)).to.be.true;
    });
    it('Should detect a not client file', function test() {
        chai_1.expect(projectStructure_1.isOnClientSide(sourceNotClientFilePath)).to.be.false;
    });
    it('should return the corresponding file path', function test() {
        chai_1.expect(projectStructure_1.getCorrespondingFile(sourceClientFilePath)).to.equal(path_1.resolve(app_root_path_1.path, outClientFilePath));
    });
    it('should return the corresponding file path of a not source file', function test() {
        chai_1.expect(projectStructure_1.getCorrespondingFile(outClientFilePath)).to.equal(path_1.resolve(app_root_path_1.path, sourceClientFilePath));
    });
    it('should walk the deep path test asset with all files', function test(done) {
        const files = [];
        projectStructure_1.walk(path_1.resolve(app_root_path_1.path, 'source', 'specs', 'testAssets', 'deepPath'), (file) => {
            files.push(file);
        }).then((paths) => {
            chai_1.expect(files).to.be.not.empty;
            chai_1.expect(paths).to.be.not.empty;
            chai_1.expect(paths).members(files);
            done();
        });
    });
    it('should delete empty folders', function test() {
        const testFolder = path_1.resolve(app_root_path_1.path, 'source', 'specs', 'testAssets', 'myEmptyFolder');
        if (!graceful_fs_1.existsSync(testFolder))
            graceful_fs_1.mkdirSync(testFolder);
        let callbackWasExecuted = '';
        projectStructure_1.cleanEmptyFoldersRecursively(path_1.resolve(path_1.dirname(testFolder)), (folder) => {
            callbackWasExecuted = folder;
        });
        chai_1.expect(graceful_fs_1.existsSync(testFolder)).to.be.false;
        chai_1.expect(callbackWasExecuted).to.equal(testFolder);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdFN0cnVjdHVyZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL3NwZWNzL3Byb2plY3RTdHJ1Y3R1cmUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QiwrQkFBd0M7QUFDeEMsaURBQWlEO0FBQ2pELDZDQUFvRDtBQUNwRCxrRUFNcUM7QUFFckMsUUFBUSxDQUFDLGtDQUFrQyxFQUFFLFNBQVMsUUFBUTtJQUMxRCxNQUFNLHVCQUF1QixHQUFHLDZCQUE2QixDQUFDO0lBQzlELE1BQU0sb0JBQW9CLEdBQUcsZ0NBQWdDLENBQUM7SUFDOUQsTUFBTSxpQkFBaUIsR0FBRyw2QkFBNkIsQ0FBQztJQUV4RCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxJQUFJO1FBQzNDLGFBQU0sQ0FBQywrQkFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLElBQUk7UUFDM0MsYUFBTSxDQUFDLGlDQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLFNBQVMsSUFBSTtRQUMvQyxhQUFNLENBQUMsaUNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkNBQTJDLEVBQUUsU0FBUyxJQUFJO1FBQ3pELGFBQU0sQ0FBQyx1Q0FBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFPLENBQUMsb0JBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0VBQWdFLEVBQUUsU0FBUyxJQUFJO1FBQzlFLGFBQU0sQ0FBQyx1Q0FBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFPLENBQUMsb0JBQVEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscURBQXFELEVBQUUsU0FBUyxJQUFJLENBQUMsSUFBSTtRQUN4RSxNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7UUFDM0IsdUJBQUksQ0FBQyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDZCxhQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzlCLGFBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDOUIsYUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxJQUFJO1FBRTNDLE1BQU0sVUFBVSxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyx3QkFBVSxDQUFDLFVBQVUsQ0FBQztZQUFFLHVCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFHbkQsSUFBSSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDN0IsK0NBQTRCLENBQUMsY0FBTyxDQUFDLGNBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDbEUsbUJBQW1CLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsYUFBTSxDQUFDLHdCQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMzQyxhQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==