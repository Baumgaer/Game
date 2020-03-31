"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const home_njk_1 = tslib_1.__importDefault(require("~bdo/views/home.njk"));
function BDOHomeFactory(ctor) {
    class BDOHome extends ctor {
        constructor() {
            super(...arguments);
            this.routerNameSpace = '/';
            this.templateString = home_njk_1.default;
        }
        async templateParams() {
            return {
                oha: 'endlich zu Hause =)'
            };
        }
    }
    BDOHome.attachToServers = ["WebServer"];
    return BDOHome;
}
exports.BDOHomeFactory = BDOHomeFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvcm91dGVzL0JET0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMkVBQTJDO0FBUzNDLFNBQWdCLGNBQWMsQ0FBc0MsSUFBVztJQVMzRSxNQUFlLE9BQVEsU0FBUSxJQUFJO1FBQW5DOztZQWdCVyxvQkFBZSxHQUFHLEdBQUcsQ0FBQztZQVFuQixtQkFBYyxHQUFHLGtCQUFRLENBQUM7UUFjeEMsQ0FBQztRQUxhLEtBQUssQ0FBQyxjQUFjO1lBQzFCLE9BQU87Z0JBQ0gsR0FBRyxFQUFFLHFCQUFxQjthQUM3QixDQUFDO1FBQ04sQ0FBQzs7SUE1QmEsdUJBQWUsR0FBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBK0I1RCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBbERELHdDQWtEQyJ9