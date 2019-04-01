"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNodeJS() {
    if (typeof window === 'undefined' && typeof process === 'object') {
        return true;
    }
    return false;
}
exports.isNodeJS = isNodeJS;
function isBrowser() {
    return !isNodeJS();
}
exports.isBrowser = isBrowser;
function getPrototypeNamesRecursive(object) {
    let prototypes = [];
    let prototype = Object.getPrototypeOf(object);
    if (prototype) {
        prototypes.push(prototype.constructor.name);
        prototypes.concat(getPrototypeNamesRecursive(prototype));
    }
    return prototypes;
}
exports.getPrototypeNamesRecursive = getPrototypeNamesRecursive;
function includesMemberOfList(search, list, extension = '') {
    for (const member of list) {
        if (search.includes(`${member}${extension}`)) {
            return true;
        }
    }
    return false;
}
exports.includesMemberOfList = includesMemberOfList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL3V0aWxzL2Vudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsU0FBZ0IsUUFBUTtJQUNwQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDOUQsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFMRCw0QkFLQztBQVFELFNBQWdCLFNBQVM7SUFDckIsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFGRCw4QkFFQztBQVNELFNBQWdCLDBCQUEwQixDQUFDLE1BQVc7SUFDbEQsSUFBSSxVQUFVLEdBQWtCLEVBQUUsQ0FBQztJQUNuQyxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLElBQUksU0FBUyxFQUFFO1FBQ1gsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQVUsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztLQUM1RDtJQUNELE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFSRCxnRUFRQztBQVdELFNBQWdCLG9CQUFvQixDQUFDLE1BQWMsRUFBRSxJQUFtQixFQUFFLFlBQW9CLEVBQUU7SUFDNUYsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQVBELG9EQU9DIn0=