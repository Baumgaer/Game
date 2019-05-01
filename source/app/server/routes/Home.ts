import { BDOHome } from '~bdo/routes/BDOHome';
import { BaseRouteFactory } from '~server/lib/BaseRoute';

/**
 * Test
 *
 * @export
 * @class GameLobby
 * @extends {BaseRouteFactory(BDOGameLobby)}
 */
export default class GameLobby extends BaseRouteFactory(BDOHome) { }
