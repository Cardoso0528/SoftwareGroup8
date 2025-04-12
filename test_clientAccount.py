from client_Account import ClientAccount

#CREATE ACCOUNT TESTING

def test_register_user1(): #successful registration 
    user = ClientAccount()
    assert user.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") == "User john_doe registered successfully."
#INVALID EMAIL 
def test_register_user2():
    user = ClientAccount()
    assert user.register_user("john_doe", "Password123!", "johnexample.com", "john", "doe") == "Error: invalid email"
# EMAIL expception
def test_register_user3():
    user = ClientAccount()
    assert user.register_user("john_doe", "Password123!", "john!@example.com", "john", "doe") == "Error: invalid email"

#Invalid Password length 
def test_register_user4():
    user = ClientAccount()
    assert user.register_user("john_doe", "pasword", "john@example.com", "john", "doe") == "Error: password must be at least 8 characters."

#invalid password character requirements
def test_register_user5():
    user = ClientAccount()
    assert user.register_user("john_doe", "password", "john@example.com", "john", "doe") == "Error: password must contain at least one capital letter and one special character and no spaces."

#invalid username
def test_register_user6():
    user = ClientAccount()
    assert user.register_user("john", "Password123!", "john@example.com", "john", "doe") == "Error: username must be between 8 and 20 characters."

#invalid username Exception 
def test_register_user7():
    user = ClientAccount()
    assert user.register_user("john doe", "Password123!", "john@example.com", "john", "doe") == "Error: username cannot contain spaces or special characters."

#testing to see if it checks DB correctly for a existing username 
def test_register_user8():
    user = ClientAccount()
    user.register_user("john_doe", "Password123!", "john@example.com", "john", "doe")
    assert user.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") == "Error: username already exists."


#Testing NAMES 

#VALID FIRSTNAME
def test_firstName9():
    testFname = ClientAccount()
    assert testFname.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") == "User john_doe registered successfully."
def test_firstName10():
    testFname = ClientAccount()
    assert testFname.register_user("john_doe", "Password123!",  "john@example.com", "john2", "doe") == "Error: first name contains invalid characters."

def test_firstName11():
    testFname = ClientAccount()
    assert testFname.register_user("john_doe", "Password123!", "john@example.com", "", "doe") == "Error: first and last name must not be empty."

def test_firstName12():
    testFname = ClientAccount()
    assert testFname.register_user("john_doe", "Password123!", "john@example.com", "john@3", "doe") == "Error: first name contains invalid characters."

#VALID LAST NAME

#Testing lastname for special characters
def test_firstName13():
    testFname = ClientAccount()
    assert testFname.register_user("john_doe", "Password123!", "john@example.com", "john", "doe12") == "Error: last name contains invalid characters."

#Testing Lastname for special characters or space
def test_firstName14():
    testFname = ClientAccount()
    assert testFname.register_user("john_doe", "Password123!", "john@example.com", "john", "doe!@#") == "Error: last name contains invalid characters."

#LOGIN TESTING

def test_login15(): #successful login
    login = ClientAccount()
    login.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    assert login.login_user("john_doe", "Password123!") == "User john_doe logged in successfully."

def test_login16(): #error login : Valid Username , Invalid Password
    login = ClientAccount()
    login.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    assert login.login_user("john_doe", "Password") == "Error: Invalid username or password."

def test_login17(): #error login: Valid Username , Exception Passowrd
    login = ClientAccount()
    login.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    assert login.login_user("john_doe", "Password 1") == "Error: Invalid username or password."

def test_login18(): #error login: Invalid Username , Exception Passowrd
    login = ClientAccount()
    login.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    assert login.login_user("john", "Password 1") == "Error: Invalid username or password."

def test_login19(): #error login: Exception Username , Exception Passowrd
    login = ClientAccount()
    login.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    assert login.login_user("", "Password 1") == "Error: Invalid username or password."

#LOGOUT TESTING

def test_logout20():
    logout = ClientAccount()
    logout.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    logout.login_user("john_doe", "Password123!")
    assert logout.logout_user("john_doe") == "User john_doe logged out."

#logging out of account that isnt logged in
def test_logout21():
    logout = ClientAccount()
    logout.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    logout.login_user("john_doe", "Password123!")
    assert logout.logout_user("johnDoe") == "Error: Invalid username or password."
