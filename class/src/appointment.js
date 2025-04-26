"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
var Appointment = /** @class */ (function () {
    function Appointment() {
        this.appointment_db = {};
        this.userArr = ["john_doe"];
        this.styArr = ["Joey20"];
        this.serArr = ["Hair Perm"];
    }
    Object.defineProperty(Appointment.prototype, "Service", {
        get: function () {
            return this.service;
        },
        set: function (service) {
            this.service = service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Time", {
        get: function () {
            return this.time;
        },
        set: function (time) {
            this.time = time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Stylist", {
        get: function () {
            return this.stylist;
        },
        set: function (stylist) {
            this.stylist = stylist;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Username", {
        get: function () {
            return this.username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Notes", {
        get: function () {
            return this.notes;
        },
        set: function (notes) {
            this.notes = notes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Confirm", {
        get: function () {
            return this.confirm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Comfirm", {
        set: function (confirm) {
            this.confirm = confirm;
        },
        enumerable: false,
        configurable: true
    });
    Appointment.prototype.applyAppointment = function (username, service, time, stylist, notes) {
        if (this.validate_username(username) == false) {
            return "Invalid username input.";
        }
        if (this.validate_stylist(stylist) == false) {
            return "Invalid stylist input.";
        }
        if (this.validateServiceName(service) == false) {
            return "Invalid service name input.";
        }
        if (this.validateTime(time) == false) {
            return "Invalid time input.";
        }
        if (this.validateDescription(notes) == false) {
            return "Invalid notes input.";
        }
        this.appointment_db[username] = { service: service, time: time, stylist: stylist, notes: notes };
        return "Applying appointment successfully";
    };
    Appointment.prototype.validateTime = function (time) {
        var isoFormatRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
        return isoFormatRegex.test(time);
    };
    Appointment.prototype.validateDescription = function (description) {
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
    Appointment.prototype.validateServiceName = function (name) {
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
        if (this.serArr.includes(name) == false) {
            return false;
        }
        return validName;
    };
    Appointment.prototype.validate_username = function (username) {
        var valid_username_characters = true;
        var special_character_found = false;
        for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
            var character = username_1[_i];
            if (character.trim() === '') {
                valid_username_characters = false;
            }
            // username can have _ or - but no other special characters
            if ("~`!@#$%^&*()+={[}]|\\:;\"'<,>.?/".includes(character)) {
                special_character_found = true;
            }
        }
        if (this.userArr.includes(username) == false) {
            return false;
        }
        return valid_username_characters && !special_character_found;
    };
    Appointment.prototype.validate_stylist = function (stylist) {
        var valid_stylist_characters = true;
        var special_character_found = false;
        for (var _i = 0, stylist_1 = stylist; _i < stylist_1.length; _i++) {
            var character = stylist_1[_i];
            if (character.trim() === '') {
                valid_stylist_characters = false;
            }
            // username can have _ or - but no other special characters
            if ("~`!@#$%^&*()+={[}]|\\:;\"'<,>.?/".includes(character)) {
                special_character_found = true;
            }
        }
        if (this.styArr.includes(stylist) == false) {
            return false;
        }
        return valid_stylist_characters && !special_character_found;
    };
    Appointment.prototype.cancelAppointment = function (username) {
        var appoint = this.appointment_db[username];
        if (!appoint) {
            return "Error: Appointment not found";
        }
        delete this.appointment_db[username];
        return 'User deleted successfully';
    };
    Appointment.prototype.rescheduleAppointment = function (username, update) {
        var appoint = this.appointment_db[username];
        if (!appoint) {
            return "Error: Appointment not found";
        }
        if (update.newTime) {
            appoint.time = update.newTime;
        }
        return "Reschedule appointment succesfully.";
    };
    Appointment.prototype.confirmAppointment = function () {
        this.confirm = true;
    };
    Appointment.prototype.checkUpcomingAppointment = function () {
        var now = new Date();
        var apptTime = new Date(this.time);
        return apptTime > now;
    };
    return Appointment;
}());
exports.Appointment = Appointment;
