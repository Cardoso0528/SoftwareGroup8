import { isAxiosError } from 'axios';
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


    applyAppointment(username: string, service: string, time: string, stylist: string,notes: string): string {
        const newService = new Service();
        if(this.validate_username(username)==false){
            return "Invalid username input.";
        }
        if(this.validate_username(stylist)==false){
            return "Invalid stylist input.";
        }
        if(this.validateServiceName(service)==false){
            return "Invalid service name input.";
        }
        if(this.validateTime(time)==false){
            return "Invalid time input.";
        }
        if(this.validateDescription(notes)==false){
            return "Invalid notes input.";
        }

        this.appointment_db[username] = {service, time, stylist, notes, confirm};
        return "Applying appointment successfully"
    }

    validateTime(time: string): boolean {
        const isoFormatRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
            return isoFormatRegex.test(time);
    }

    validateDescription(description: string): boolean {
        let validDescription = true;
        if (description.length > 500) {
            validDescription = false;
        }
        for (const char of description) {
            if ("~`!@#$%^*+={[}]|\\:;\"<>?/".includes(char)) {
                validDescription = false;
            }
        }
        return validDescription;
    }
    public validateServiceName(name: string): boolean {
        let validName = true;
        if (name.length > 50) {
            validName = false;
        }
        for (const char of name) {
            if ("~`!@#$%^*+={[}]|\\:;\"<>?/".includes(char)) {
                validName = false;
            }
        }
        return validName;
    }

     validate_username(username: string): boolean {
        let valid_username_characters = true;
        let special_character_found = false;

        for (const character of username) {
            if (character.trim() === '') {
                valid_username_characters = false;
            }
            // username can have _ or - but no other special characters
            if ("~`!@#$%^&*()+={[}]|\\:;\"'<,>.?/".includes(character)) {
                special_character_found = true;
            }
        }
        return valid_username_characters && !special_character_found;
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
const newApt = new Appointment();
console.log(newApt.applyAppointment("john_doe","Hair Perm","2025-05-10T19:30:00Z","Joey20","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name."));
