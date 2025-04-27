import { Service } from './service';

class Appointment {
    service: Service | null;
    time: string | null;
    stylist: string | null;
    is_confirm: boolean;
    is_upcoming: boolean;

    constructor(service: Service | null = null, time: string | null = null, stylist: string | null = null, is_confirm: boolean = false, is_upcoming: boolean = true) {
        this.service = service;
        this.time = time;
        this.stylist = stylist;
        this.is_confirm = is_confirm;
        this.is_upcoming = is_upcoming;
    }

    updateAppointmentService(serviceName: string, description: string, price: number): void {
        const newService = new Service();
        if (newService.addService(serviceName, description, price)) {
            this.service = newService;
        } else {
            throw new Error("Invalid service details provided.");
        }
    }

    updateAppointmentTime(newTime: string): void {
        this.time = newTime;
    }

    updateAppointmentStylist(newStylist: string): void {
        this.stylist = newStylist;
    }

    isAppointmentDone(): boolean {
        return !this.is_upcoming && this.is_confirm;
    }

    getServiceDetails(): { name: string; description: string; price: number } | null {
        if (this.service) {
            return {
                name: this.service.name,
                description: this.service.description,
                price: this.service.price,
            };
        }
        return null;
    }
}