"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const gameLobby_njk_1 = tslib_1.__importDefault(require("~bdo/views/gameLobby.njk"));
function BDOGameLobbyFactory(ctor) {
    class BDOGameLobby extends ctor {
        constructor() {
            super(...arguments);
            this.routerNameSpace = '/';
            this.templateString = gameLobby_njk_1.default;
        }
        async templateParams() {
            return {
                oha: 'OOOOOHAAAAAAAA!!!'
            };
        }
    }
    BDOGameLobby.attachToServers = ["GameServer"];
    return BDOGameLobby;
}
exports.BDOGameLobbyFactory = BDOGameLobbyFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPR2FtZUxvYmJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC9yb3V0ZXMvQkRPR2FtZUxvYmJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFGQUFnRDtBQVNoRCxTQUFnQixtQkFBbUIsQ0FBc0MsSUFBVztJQVNoRixNQUFlLFlBQWEsU0FBUSxJQUFJO1FBQXhDOztZQWdCVyxvQkFBZSxHQUFHLEdBQUcsQ0FBQztZQVFuQixtQkFBYyxHQUFHLHVCQUFRLENBQUM7UUFjeEMsQ0FBQztRQUxhLEtBQUssQ0FBQyxjQUFjO1lBQzFCLE9BQU87Z0JBQ0gsR0FBRyxFQUFFLG1CQUFtQjthQUMzQixDQUFDO1FBQ04sQ0FBQzs7SUE1QmEsNEJBQWUsR0FBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBK0I3RCxPQUFPLFlBQVksQ0FBQztBQUN4QixDQUFDO0FBbERELGtEQWtEQyJ9