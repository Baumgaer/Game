"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BDOModel {
    watched(property) {
        const that = this;
        let type;
        if (that[property])
            type = that[property].constructor;
        let newVal = {
            valueOf() {
                return that[property];
            }
        };
        if (type)
            newVal = new type((that)[property]);
        newVal.__watched__ = {
            model: that,
            property
        };
        return newVal;
    }
}
exports.BDOModel = BDOModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLE1BQXNCLFFBQVE7SUFVbkIsT0FBTyxDQUFDLFFBQWdCO1FBQzNCLE1BQU0sSUFBSSxHQUFtQixJQUFJLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7WUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUN0RCxJQUFJLE1BQU0sR0FBbUI7WUFDekIsT0FBTztnQkFDSCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDO1NBQ0osQ0FBQztRQUNGLElBQUksSUFBSTtZQUFFLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLFdBQVcsR0FBRztZQUNqQixLQUFLLEVBQUUsSUFBSTtZQUNYLFFBQVE7U0FDWCxDQUFDO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBMUJELDRCQTBCQyJ9