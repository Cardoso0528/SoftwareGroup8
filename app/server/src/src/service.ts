export class Service {
     name: string;
     duration: number;
     description: string;
     cost: string;

    public get Name(): string{
        return this.name;
    }

    public set Name(name: string){
        this.name = name;
    }

    public get Duration(): number{
        return this.duration;
    }

    public set Duration(duration: number){
        this.duration = duration;
    }

    public get Description(): string{
        return this.description;
    }

    public set Description(description: string){
        this.description = description;
    }

    public get Cost(): string{
        return this.cost;
    }

    public set Cost(cost: string) {
        this.cost = cost;
    }

    public validateCost(cost: string): boolean {
        const pattern = /^\d+\.\d{2}$/;
        let validCost : boolean= true;
        for (let i = 0; i < cost.length; i++) {
            if (isNaN(Number(cost[i])) && cost[i] !== '.') {
                validCost = false;
                return validCost;
            }
        }
        if (!pattern.test(cost)) {
            validCost = false;
        }
        return validCost;
    }

    public validateDescription(description: string): boolean {
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

    public validateName(name: string): boolean {
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

    public addService(name: string, duration: number, description: string, cost: string): string {
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
        this.Name = name;
        this.Duration = duration;
        this.Description = description;
        this.Cost = cost;

        return "Service added successfully";
    }


    public editService(newName: string, newDuration: number, newDescription: string, newCost: string): string {
        if (!newName || !newDuration || !newDescription || !newCost) {
            return "Exceptional: No input";
        }

        if (!this.validateName(newName)) return "Error: Invalid name";
        if (!this.validateDescription(newDescription)) return "Error: Invalid description";
        if (!this.validateCost(newCost)) return "Error: Invalid cost";

        this.Name = newName;
        this.Duration = newDuration;
        this.Description = newDescription;
        this.Cost = newCost;
        
        return "Service updated successfully";
    }

    public delService(confirmationName: string): string {
        if (this.Name !== confirmationName) {
            return "Error: Service name mismatch";
        }

        this.Name = "";
        this.Duration = 0;
        this.Description = "";
        this.Cost = "";
        
        return "Service deleted successfully";
    }
}
const pattern = /^\d+\.\d{2}$/;
const service = new Service();
let stuff: string = "60.00";
let valid: boolean = true;
for (let i = 0; i < stuff.length; i++) {
    if (isNaN(Number(stuff[i])) && stuff[i] !== '.') {
        console.log(stuff[i]);
        valid = false;
        break;
    }
}
if(!pattern.test(stuff)){
    valid = false;
}
console.log(valid);
console.log(service.addService("Hair Perm", 30 ,"A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00"));

