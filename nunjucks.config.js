/* eslint-disable */
// @ts-ignore
const environment = require("./out/app/utils/environment");

module.exports = function (env) {
    environment.templateFilters(env);
};
