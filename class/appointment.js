"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./service");
var Appointment = /** @class */ (function () {
    function Appointment(service, time, stylist, is_confirm, is_upcoming) {
        if (service === void 0) { service = null; }
        if (time === void 0) { time = null; }
        if (stylist === void 0) { stylist = null; }
        if (is_confirm === void 0) { is_confirm = false; }
        if (is_upcoming === void 0) { is_upcoming = true; }
        this.service = service;
        this.time = time;
        this.stylist = stylist;
        this.is_confirm = is_confirm;
        this.is_upcoming = is_upcoming;
    }
    Appointment.prototype.updateAppointmentService = function (serviceName, description, price) {
        var newService = new service_1.Service();
        if (newService.addService(serviceName, description, price)) {
            this.service = newService;
        }
        else {
            throw new Error("Invalid service details provided.");
        }
    };
    Appointment.prototype.updateAppointmentTime = function (newTime) {
        this.time = newTime;
    };
    Appointment.prototype.updateAppointmentStylist = function (newStylist) {
        this.stylist = newStylist;
    };
    Appointment.prototype.isAppointmentDone = function () {
        return !this.is_upcoming && this.is_confirm;
    };
    Appointment.prototype.getServiceDetails = function () {
        if (this.service) {
            return {
                name: this.service.name,
                description: this.service.description,
                price: this.service.price,
            };
        }
        return null;
    };
    return Appointment;
}());
