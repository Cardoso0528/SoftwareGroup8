import { Service } from './service';

export class Appointment {
    username: string;
    service: string;
    time: string;
    stylist: string;
    notes: string;
    confirm: boolean;

    appointment_db: { [key: string]: any } = {};

    public get Service(): string{
        return this.service;
    }

    public set Service(service: string){
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

    public get Username(): string{
        return this.username;
    }

    public set Username(username: string){
        this.username = username;
    }

    public get Notes(): string{
        return this.notes;
    }

    public set Notes(notes: string){
        this.notes = notes;
    }

    public get Confirm(): boolean{
        return this.confirm;
    }

    public set Comfirm(confirm: boolean){
        this.confirm = confirm;
    }


    applyAppointment(username: string, service: string, time: string, stylist: string,notes: string, confirm: boolean ): string {
        const newService = new Service();
        if (newService.Name !== service) {
            return "Invalid service details provided.";
        }
        this.appointment_db[username] = {service, time, stylist, notes, confirm};
        return "Applying appointment successfully"
    }

    cancelAppointment(username: string){
        const appoint = this.appointment_db[username];
        if(!appoint){
            return "Error: Appointment not found";
        }
        delete this.appointment_db[username];
        return 'User deleted successfully';
    }

    rescheduleAppointment(username: string, update: {newTime?: string} ): string {
        const appoint = this.appointment_db[username];
        if(!appoint){
            return "Error: Appointment not found";
        }
        if(update.newTime){
            appoint.time = update.newTime;
        }
        return "Reschedule appointment succesfully."
    }


    confirmAppointment(): void {
        this.confirm = true;
    }

    checkUpcomingAppointment(): boolean{
        const now = new Date();
        const apptTime = new Date(this.time);
        return apptTime > now;
    }

}
