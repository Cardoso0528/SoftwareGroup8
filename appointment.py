from service import Service

class Appointment:
    def __init__(self, service=None, time=None, stylist=None, is_confirm=False, is_upcoming=True):
        self.service = service  # Service object
        self.time = time  # Appointment time
        self.stylist = stylist  # Stylist name
        self.is_confirm = is_confirm  # Boolean to confirm appointment
        self.is_upcoming = is_upcoming  # Boolean to check if appointment is upcoming

    def update_appointment_service(self, service_name, description, price):
        new_service = Service()
        if new_service.add_service(service_name, description, price):
            self.service = new_service
        else:
            raise ValueError("Invalid service details provided.")

    def update_appointment_time(self, new_time):
        self.time = new_time

    def update_appointment_stylist(self, new_stylist):
        self.stylist = new_stylist

    def is_appointment_done(self):
        return not self.is_upcoming and self.is_confirm

    def get_service_details(self):
        if self.service:
            return {
                "name": self.service.name,
                "description": self.service.description,
                "price": self.service.price,
            }
        return None