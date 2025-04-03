class Service:
    def __init__(self):
        self.name = None
        self.description = None
        self.price = None

    def add_service(self, name, description, price):
        if not name or len(name) > 100:
            return False
        if not description or len(description) > 255:
            return False
        try:
            float(price)
        except ValueError:
            return False
        self.name = name
        self.description = description
        self.price = price
        return True