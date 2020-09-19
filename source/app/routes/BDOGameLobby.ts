import { BDORoute } from '~bdo/lib/BDORoute';
import template from "~bdo/views/gameLobby.njk";

/**
 * constructs the base for the gameLobby route on server and client
 *
 * @template TBase
 * @param ctor The type to extend with
 * @returns The mixed in class BDOGameLobby
 */
export function BDOGameLobbyFactory<TBase extends Constructor<BDORoute>>(ctor: TBase) {

    /**
     * Serves the game lobby to the client
     *
     * @extends TBase
     */
    abstract class BDOGameLobby extends ctor {

        /**
         * @inheritdoc
         *
         * @static
         * @memberof GameLobby
         */
        public static attachToServers: string[] = ["GameServer"];

        /**
         * @inheritdoc
         *
         * @memberof GameLobby
         */
        public routerNameSpace = '/';

        /**
         * @inheritdoc
         *
         * @protected
         * @memberof GameLobby
         */
        protected templateString = template;

        /**
         * @inheritdoc
         *
         * @protected
         * @returns A test string in an object with the key oha
         * @memberof GameLobby
         */
        protected async templateParams(): Promise<IndexStructure> {
            return {
                oha: 'OOOOOHAAAAAAAA!!!'
            };
        }
    }

    return BDOGameLobby;
}
