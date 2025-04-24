"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
var service_1 = require("./service");
var Appointment = /** @class */ (function () {
    function Appointment() {
        this.appointment_db = {};
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
        set: function (username) {
            this.username = username;
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
    Appointment.prototype.applyAppointment = function (username, service, time, stylist, notes, confirm) {
        var newService = new service_1.Service();
        if (newService.Name !== service) {
            return "Invalid service details provided.";
        }
        this.appointment_db[username] = { service: service, time: time, stylist: stylist, notes: notes, confirm: confirm };
        return "Applying appointment successfully";
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
