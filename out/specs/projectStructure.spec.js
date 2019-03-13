"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const projectStructure_1 = require("./../utils/projectStructure");
describe('Tests for utils/projectStructure', function () {
    let sourceNotClientFilePath = './source/app/server/test.ts';
    let sourceClientFilePath = './source/app/client/ts/test.ts';
    let outClientFilePath = './out/app/client/js/test.js';
    it('should detect a source file', function () {
        chai_1.expect(projectStructure_1.isSourceFile(sourceClientFilePath)).to.be.true;
    });
    it('Should detect a client file', function () {
        chai_1.expect(projectStructure_1.isOnClientSide(sourceClientFilePath)).to.be.true;
    });
    it('Should detect a not client file', function () {
        chai_1.expect(projectStructure_1.isOnClientSide(sourceNotClientFilePath)).to.be.false;
    });
    it('should return the corresponding file path', function () {
        chai_1.expect(projectStructure_1.getCorrespondingFile(sourceClientFilePath)).to.equal(path_1.resolve(app_root_path_1.path, outClientFilePath));
    });
    it('should return the corresponding file path of a not source file', function () {
        chai_1.expect(projectStructure_1.getCorrespondingFile(outClientFilePath)).to.equal(path_1.resolve(app_root_path_1.path, sourceClientFilePath));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdFN0cnVjdHVyZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3NwZWNzL3Byb2plY3RTdHJ1Y3R1cmUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QiwrQkFBK0I7QUFDL0IsaURBQWlEO0FBQ2pELGtFQUFpRztBQUVqRyxRQUFRLENBQUMsa0NBQWtDLEVBQUU7SUFDekMsSUFBSSx1QkFBdUIsR0FBRyw2QkFBNkIsQ0FBQztJQUM1RCxJQUFJLG9CQUFvQixHQUFHLGdDQUFnQyxDQUFDO0lBQzVELElBQUksaUJBQWlCLEdBQUcsNkJBQTZCLENBQUM7SUFFdEQsRUFBRSxDQUFDLDZCQUE2QixFQUFFO1FBQzlCLGFBQU0sQ0FBQywrQkFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtRQUM5QixhQUFNLENBQUMsaUNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUU7UUFDbEMsYUFBTSxDQUFDLGlDQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDJDQUEyQyxFQUFFO1FBQzVDLGFBQU0sQ0FBQyx1Q0FBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFPLENBQUMsb0JBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0VBQWdFLEVBQUU7UUFDakUsYUFBTSxDQUFDLHVDQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=