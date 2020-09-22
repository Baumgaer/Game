/* eslint-disable */
const nunjucks = require("nunjucks");

module.exports = function (env) {
    env.addFilter('json', (value, spaces) => {
        if (value instanceof nunjucks.runtime.SafeString) {
            value = value.toString();
        }
        return new env.filters.safe(JSON.stringify(value, null, spaces));
    });

    env.addFilter('bind', function (value, bindingName) {
        if (value instanceof nunjucks.runtime.SafeString) {
            value = value.toString();
        }
        return env.filters.safe(`<bind name="${bindingName}">${value}</bind>`);
    });
};
