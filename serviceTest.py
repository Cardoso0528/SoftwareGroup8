from unittest import TestCase
from main import Service

class TestService(TestCase):
    def test_add_service1(self):
        service = Service()
        assert service.add_service("Hair Perm",
                                   "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",
                                   "60.00") == "Service added successfully"

    # Invalid cost
    def test_add_service2(self):
        service = Service()
        assert service.add_service("Hair Perm",
                                   "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",
                                   "60/00") == "Error: Invalid cost"

    # Exceptional cost
    def test_add_service3(self):
        service = Service()
        assert service.add_service("Hair Perm",
                                   "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",
                                   "abcd") == "Error: Invalid cost"

    # Invalid service description
    def test_add_service4(self):
        service = Service()
        assert service.add_service("Hair Perm",
                                   "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name. A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name. A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",
                                   "60.00") == "Error: Invalid description"

    # Exceptional service description
    def test_add_service7(self):
        service = Service()
        assert service.add_service("Hair Perm",
                                   "A \\ permanent wave, ~commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",
                                   "60.00") == "Error: Invalid description"

    # Invalid service name
    def test_add_service10(self):
        service = Service()
        assert service.add_service(
            "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",
            "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",
            "60.00") == "Error: Invalid name"

    # Exceptional service name
    def test_add_service19(self):
        service = Service()
        assert service.add_service("",
                                   "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",
                                   "60.00") == "Exceptional: No input"
