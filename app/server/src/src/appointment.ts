import { Service } from './service';

class Appointment {
    service: Service;
    time: string;
    stylist: string;
    confirm: boolean;
    upcoming: boolean;



    public get Service(): Service{
        return this.service;
    }

    public set Service(service: Service){
        this.service = service;
    }

    public get Time(): string{
        return this.time;
    }

    public set Time(time: string){
        this.time = time;
    }

    public get Stylist(): string{
        return this.stylist;
    }

    public set Stylist(stylist: string){
        this.stylist = stylist;
    }

    public get Confirm(): boolean{
        return this.confirm;
    }

    public set Confirm(confirm: boolean){
        this.confirm = confirm;
    }

    public get Upcoming(): boolean{
        return this.upcoming;
    }

    public set Upcoming(upcoming: boolean){
        this.upcoming = upcoming;
    }

    updateAppointmentService(serviceName: string, duration: number, description: string, cost: string): void {
        const newService = new Service();
        if (newService.addService(serviceName, duration, description, cost)) {
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
        return !this.upcoming && this.confirm;
    }

    getServiceDetails(): { name: string; description: string; cost: string } | null {
        if (this.service) {
            return {
                name: this.service.name,
                description: this.service.description,
                cost: this.service.cost,
            };
        }
        return null;
    }

}