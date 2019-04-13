"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdFN0cnVjdHVyZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3NwZWNzL3Byb2plY3RTdHJ1Y3R1cmUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QiwrQkFBK0I7QUFDL0IsaURBQWlEO0FBQ2pELGtFQUF1RztBQUV2RyxRQUFRLENBQUMsa0NBQWtDLEVBQUUsU0FBUyxRQUFRO0lBQzFELE1BQU0sdUJBQXVCLEdBQUcsNkJBQTZCLENBQUM7SUFDOUQsTUFBTSxvQkFBb0IsR0FBRyxnQ0FBZ0MsQ0FBQztJQUM5RCxNQUFNLGlCQUFpQixHQUFHLDZCQUE2QixDQUFDO0lBRXhELEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLElBQUk7UUFDM0MsYUFBTSxDQUFDLCtCQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFLFNBQVMsSUFBSTtRQUMzQyxhQUFNLENBQUMsaUNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUUsU0FBUyxJQUFJO1FBQy9DLGFBQU0sQ0FBQyxpQ0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNoRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyQ0FBMkMsRUFBRSxTQUFTLElBQUk7UUFDekQsYUFBTSxDQUFDLHVDQUFvQixDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnRUFBZ0UsRUFBRSxTQUFTLElBQUk7UUFDOUUsYUFBTSxDQUFDLHVDQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxREFBcUQsRUFBRSxTQUFTLElBQUksQ0FBQyxJQUFJO1FBQ3hFLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUMzQix1QkFBSSxDQUFDLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNkLGFBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDOUIsYUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUM5QixhQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=