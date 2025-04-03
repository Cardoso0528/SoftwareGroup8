from service import Service

#Successful
def test_add_service1():
    service = Service()
    assert service.add_service("Hair Perm", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")

#Invalid price
def test_add_service2():
    service = Service()
    assert service.add_service("Hair Perm", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60/00")

#Exceptional price
def test_add_service3():
    service = Service()
    assert service.add_service("Hair Perm", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "abcd")

#Invalid service description
def test_add_service4():
    service = Service()
    assert service.add_service("Hair Perm", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name." , "60.00")

#Exceptional service description
def test_add_service7():
    service = Service()
    assert service.add_service("Hair Perm", "A \\ permanent wave, ~commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")

#Invalid service name
def test_add_service10():
    service = Service()
    assert service.add_service("A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")

#Exceptional service name
def test_add_service19():
    service = Service()
    assert service.add_service("Hair \\ Perm", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")
