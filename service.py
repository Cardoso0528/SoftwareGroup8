import re


class Service:
    def __init__(self):
        self.name = None
        self.description = None
        self.cost = None

    def get_name(self):
        return self.name

    def set_name(self, name):
        return self.name = name

    def get_description(self):
        return self.description

    def set_description(self, description):
        return self.description = description

    def get_cost(self):
        return self.cost

    def set_description(self, cost):
        return self.cost = cost
    
    def validate_cost(self, cost):
        pattern = r"^\d+\.\d{2}$"
        valid_cost = True
        for char in cost:
            if not char.isdigit() and not char == '.':
                valid_cost = False
        if not re.match(pattern, cost):
            valid_cost = False
        return valid_cost

    def validate_description(self, description):
        valid_description = True
        if len(description) > 500:
           valid_description = False
        for char in description:
            if char in "~`!@#$%^*+={[}]|\\:;\"<>?/":
                valid_description = False
        return valid_description


    def validate_name(self, name):
        valid_name = True
        if len(name) > 50:
            valid_name = False
        for char in name:
            if char in "~`!@#$%^*+={[}]|\\:;\"<>?/":
                valid_name = False
        return valid_name

    def add_service(self, name, description, cost):
        if len(cost) < 1 or len(name) < 1 or len(description) < 1:
            return "Exceptional: No input"
        if not self.validate_cost(cost):
            return "Error: Invalid cost"
        if not self.validate_description(description):
            return "Error: Invalid description"
        if not self.validate_name(name):
            return "Error: Invalid name"
        return "Service added successfully"

if __name__ == '__main__':
    service = Service()

    print(service.add_service("Hair Perm", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00"))
