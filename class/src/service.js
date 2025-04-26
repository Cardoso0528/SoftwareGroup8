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
    Object.defineProperty(Service.prototype, "Duration", {
        get: function () {
            return this.duration;
        },
        set: function (duration) {
            this.duration = duration;
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
    Service.prototype.validateDuration = function (duration) {
        var validDuration = true;
        for (var i = 0; i < duration.length; i++) {
            if (isNaN(Number(duration[i]))) {
                validDuration = false;
                return validDuration;
            }
        }
        return validDuration;
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
    Service.prototype.addService = function (name, duration, description, cost) {
        if (cost.length < 1 || duration.length < 1 || name.length < 1 || description.length < 1) {
            return "Exceptional: No input";
        }
        if (this.validateCost(cost) == false) {
            return "Error: Invalid cost";
        }
        if (this.validateDuration(duration) == false) {
            return "Error: Invalid duration";
        }
        if (this.validateDescription(description) == false) {
            return "Error: Invalid description";
        }
        if (this.validateName(name) == false) {
            return "Error: Invalid name";
        }
        this.Name = name;
        this.Duration = duration;
        this.Description = description;
        this.Cost = cost;
        return "Service added successfully";
    };
    Service.prototype.editService = function (newName, newDuration, newDescription, newCost) {
        if (!newName || !newDuration || !newDescription || !newCost) {
            return "Exceptional: No input";
        }
        if (!this.validateName(newName))
            return "Error: Invalid name";
        if (!this.validateDescription(newDescription))
            return "Error: Invalid description";
        if (!this.validateCost(newCost))
            return "Error: Invalid cost";
        this.Name = newName;
        this.Duration = newDuration;
        this.Description = newDescription;
        this.Cost = newCost;
        return "Service updated successfully";
    };
    Service.prototype.delService = function (confirmationName) {
        if (this.Name !== confirmationName) {
            return "Error: Service name mismatch";
        }
        this.Name = "";
        this.Duration = "";
        this.Description = "";
        this.Cost = "";
        return "Service deleted successfully";
    };
    return Service;
}());
exports.Service = Service;
