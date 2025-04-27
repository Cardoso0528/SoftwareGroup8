"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
var Service = /** @class */ (function () {
    function Service() {
    }
    Object.defineProperty(Service.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "Description", {
        get: function () {
            return this.description;
        },
        set: function (description) {
            this.description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "Cost", {
        get: function () {
            return this.cost;
        },
        set: function (cost) {
            this.cost = cost;
        },
        enumerable: false,
        configurable: true
    });
    Service.prototype.validateCost = function (cost) {
        var pattern = /^\d+\.\d{2}$/;
        var validCost = true;
        for (var i = 0; i < cost.length; i++) {
            if (isNaN(Number(cost[i])) && cost[i] !== '.') {
                validCost = false;
                return validCost;
            }
        }
        if (!pattern.test(cost)) {
            validCost = false;
        }
        return validCost;
    };
    Service.prototype.validateDescription = function (description) {
        var validDescription = true;
        if (description.length > 500) {
            validDescription = false;
        }
        for (var _i = 0, description_1 = description; _i < description_1.length; _i++) {
            var char = description_1[_i];
            if ("~`!@#$%^*+={[}]|\\:;\"<>?/".includes(char)) {
                validDescription = false;
            }
        }
        return validDescription;
    };
    Service.prototype.validateName = function (name) {
        var validName = true;
        if (name.length > 50) {
            validName = false;
        }
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var char = name_1[_i];
            if ("~`!@#$%^*+={[}]|\\:;\"<>?/".includes(char)) {
                validName = false;
            }
        }
        return validName;
    };
    Service.prototype.addServiceTest = function (name, description, cost) {
        if (cost.length < 1 || name.length < 1 || description.length < 1) {
            return "Exceptional: No input";
        }
        if (this.validateCost(cost) == false) {
            return "Error: Invalid cost";
        }
        if (this.validateDescription(description) == false) {
            return "Error: Invalid description";
        }
        if (this.validateName(name) == false) {
            return "Error: Invalid name";
        }
        return "Service added successfully";
    };
    Service.prototype.addService = function (name, description, cost) {
        if (!name || !description || !cost) {
            return "Exceptional: No input";
        }
        if (!this.validateName(name))
            return "Error: Invalid name";
        if (!this.validateDescription(description))
            return "Error: Invalid description";
        if (!this.validateCost(cost))
            return "Error: Invalid cost";
        this.Name = name;
        this.Description = description;
        this.Cost = cost;
        return "Service added successfully";
    };
    Service.prototype.editService = function (newName, newDescription, newCost) {
        if (!newName || !newDescription || !newCost) {
            return "Exceptional: No input";
        }
        // Validate updates
        if (!this.validateName(newName))
            return "Error: Invalid name";
        if (!this.validateDescription(newDescription))
            return "Error: Invalid description";
        if (!this.validateCost(newCost))
            return "Error: Invalid cost";
        // Apply updates
        this.Name = newName;
        this.Description = newDescription;
        this.Cost = newCost;
        return "Service updated successfully";
    };
    Service.prototype.delService = function (confirmationName) {
        if (this.Name !== confirmationName) {
            return "Error: Service name mismatch";
        }
        // Clear service data
        this.Name = "";
        this.Description = "";
        this.Cost = "";
        return "Service deleted successfully";
    };
    return Service;
}());
exports.Service = Service;
var pattern = /^\d+\.\d{2}$/;
var service = new Service();
var stuff = "60.00";
var valid = true;
for (var i = 0; i < stuff.length; i++) {
    if (isNaN(Number(stuff[i])) && stuff[i] !== '.') {
        console.log(stuff[i]);
        valid = false;
        break;
    }
}
if (!pattern.test(stuff)) {
    valid = false;
}
console.log(valid);
console.log(service.addServiceTest("Hair Perm", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00"));
