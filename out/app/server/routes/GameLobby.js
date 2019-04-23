"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoute_1 = require("~server/lib/BaseRoute");
class GameLobby extends BaseRoute_1.BaseRoute {
    constructor() {
        super(...arguments);
        this.routerNameSpace = '/';
    }
    async templateParams() {
        return {
            oha: 'OOOOOHAAAAAAAA!!!'
        };
    }
}
exports.default = GameLobby;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUxvYmJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvcm91dGVzL0dhbWVMb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFrRDtBQVNsRCxNQUFxQixTQUFVLFNBQVEscUJBQVM7SUFBaEQ7O1FBTVcsb0JBQWUsR0FBRyxHQUFHLENBQUM7SUFjakMsQ0FBQztJQUxhLEtBQUssQ0FBQyxjQUFjO1FBQzFCLE9BQU87WUFDSCxHQUFHLEVBQUUsbUJBQW1CO1NBQzNCLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFwQkQsNEJBb0JDIn0=