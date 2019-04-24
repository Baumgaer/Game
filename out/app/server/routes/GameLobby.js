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
GameLobby.attachToServers = ["GameServer"];
exports.default = GameLobby;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUxvYmJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvcm91dGVzL0dhbWVMb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFrRDtBQVNsRCxNQUFxQixTQUFVLFNBQVEscUJBQVM7SUFBaEQ7O1FBZ0JXLG9CQUFlLEdBQUcsR0FBRyxDQUFDO0lBY2pDLENBQUM7SUFMYSxLQUFLLENBQUMsY0FBYztRQUMxQixPQUFPO1lBQ0gsR0FBRyxFQUFFLG1CQUFtQjtTQUMzQixDQUFDO0lBQ04sQ0FBQzs7QUFwQmEseUJBQWUsR0FBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBVDdELDRCQThCQyJ9