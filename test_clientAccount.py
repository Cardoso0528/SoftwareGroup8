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




#LOGIN TESTING

def test_login1(): #successful login
    login = ClientAccount()
    login.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    assert login.login_user("john_doe", "Password123!") == "User john_doe logged in successfully."

def test_login2(): #error login : Valid Username , Invalid Password
    login = ClientAccount()
    login.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    assert login.login_user("john_doe", "Password") == "Error: Invalid username or password."

def test_login3(): #error login: Valid Username , Exception Passowrd
    login = ClientAccount()
    login.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    assert login.login_user("john_doe", "Password 1") == "Error: Invalid username or password."



#LOGOUT TESTING

def test_logout1():
    logout = ClientAccount()
    logout.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    logout.login_user("john_doe", "Password123!")
    assert logout.logout_user("john_doe") == "User john_doe logged out."

#logging out of account that isnt logged in
def test_logout2():
    logout = ClientAccount()
    logout.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
    logout.login_user("john_doe", "Password123!")
    assert logout.logout_user("johnDoe") == "Error: Invalid username or password."