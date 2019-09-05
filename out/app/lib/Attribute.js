"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = require("~bdo/lib/Property");
const environment_1 = require("~bdo/utils/environment");
const Modification_1 = require("~bdo/lib/Modification");
class Attribute extends Property_1.Property {
    constructor(object, property, params) {
        super(object, property, params);
        this.inDOMInitialized = false;
    }
    setValue(value) {
        if (this.valueOf() === value)
            return;
        super.setValue(value);
        this.reflectToDOMAttribute();
        this.storeInUnsavedChanges(value);
    }
    valueOf() {
        let value = super.valueOf();
        if (!this.storeTemporary && !this.doNotPersist && this.object.isBDOModel) {
            value = this.unsavedChange;
        }
        return value;
    }
    reflectToDOMAttribute() {
        if (!environment_1.isBrowser())
            return;
        const stringKey = this.property.toString();
        if (this.object instanceof HTMLElement) {
            const attrValue = this.object.getAttribute(stringKey);
            if (!this.inDOMInitialized && attrValue) {
                this.inDOMInitialized = true;
                this.object[stringKey] = attrValue;
                return;
            }
            else
                this.inDOMInitialized = true;
            if (attrValue !== this.value)
                this.object.setAttribute(stringKey, this.value);
        }
    }
    storeInUnsavedChanges(value) {
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        if (!this.object.isBDOModel || this.storeTemporary || this.doNotPersist || (value instanceof Modification_1.Modification && value.type === "fromServer"))
            return;
        this.unsavedChange = valueToPass;
    }
}
exports.Attribute = Attribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFzRXJELE1BQWEsU0FBMkQsU0FBUSxtQkFBUTtJQTREcEYsWUFBWSxNQUFTLEVBQUUsUUFBVyxFQUFFLE1BQXlCO1FBQ3pELEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBSDFCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztJQUk1QyxDQUFDO0lBUU0sUUFBUSxDQUFDLEtBQVc7UUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSztZQUFFLE9BQU87UUFHckMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUtNLE9BQU87UUFDVixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3RFLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQVVTLHFCQUFxQjtRQUMzQixJQUFJLENBQUMsdUJBQVMsRUFBRTtZQUFFLE9BQU87UUFDekIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUzQyxJQUFJLElBQUksQ0FBQyxNQUFNLFlBQVksV0FBVyxFQUFFO1lBQ3BDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXRELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksU0FBUyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUVaLElBQUksQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUNyRCxPQUFPO2FBQ1Y7O2dCQUFNLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFFcEMsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUs7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqRjtJQUNMLENBQUM7SUFZUyxxQkFBcUIsQ0FBQyxLQUFVO1FBQ3RDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLEtBQUssWUFBWSwyQkFBWTtZQUFFLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUN2RSxLQUFLLFlBQVksMkJBQVksSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQztZQUFFLE9BQU87UUFDMUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7SUFDckMsQ0FBQztDQUNKO0FBcklELDhCQXFJQyJ9