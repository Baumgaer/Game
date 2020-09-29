import { BDOLogger, logLevels } from '~bdo/lib/BDOLogger';
import { baseConstructor } from '~bdo/utils/decorators';

/**
 * Logs colored console output
 *
 * @class Logger
 * @extends BDOLogger
 */
@baseConstructor()
export class Logger extends BDOLogger {

    constructor(params?: ConstParams<Logger>) {
        super(params);
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param _logLevel The log level which effects the colorization
     * @param _message The message to write to the log
     * @memberof Logger
     */
    protected writeToFile(_logLevel: logLevels, _message: any): void {
        // Just do nothing for the first time. Later this function will send the logging to the server
    }
}
