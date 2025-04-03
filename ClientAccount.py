import re

class ClientAccount:
    def __init__(self):
        self.users_db = {} # Simulate databse for user accounts
        self.logged_in_users = set() # Track users logged in

    # validate email address
    def validate_email(self, email):
        email_pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$"
        return re.match(email_pattern, email) is not None

    # validate password (capital letter, special character, no spaces)
    def validate_password_characters(self, password):
        valid_password_characters = False
        uppercase_letter_found = False
        special_character_found = False
        space_detected = False
        for character in password:
            if character.isupper():
                uppercase_letter_found = True
            if character in "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/":
                special_character_found = True
            if character.isspace():
                space_detected = True
        if uppercase_letter_found and special_character_found and not space_detected:
            valid_password_characters = True
        return valid_password_characters

        # validate fname && lname
    def validate_Fname(self,first_name):
        #no special characters 
        special_character_found = False
        for character in first_name:
            if character in "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/":
                special_character_found = True
        return special_character_found
    
    def validate_Lname(self,last_name):
        #no special characters 
        special_character_found = False
        space_found = False
        notValidLastName = False
        for character in last_name:
            if character in "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/":
                special_character_found = True
            if character.isspace():
                space_found = True
        if special_character_found and space_found or space_found or special_character_found:
            notValidLastName = True
        return notValidLastName

    # validate username
    def validate_username(self, username):
        valid_username_characters = True
        special_character_found = False
        for character in username:
            if character.isspace():
                valid_username_characters = False
            # username can have _ or - but no other special characters
            if character in "~`!@#$%^&*()+={[}]|\\:;\"'<,>.?/":
                special_character_found = True
        return valid_username_characters and not special_character_found

    def register_user(self, username, password, email, first_name, last_name):
        if len(first_name) < 1 or len(last_name) < 1:
            return "Error: first and last name must not be empty."
        if not self.validate_email(email):
            return "Error: invalid email"
        if username in self.users_db:
            return "Error: username already exists."
        if (len(username) < 8 or len(username) > 20):
            return "Error: username must be between 8 and 20 characters."
        if not self.validate_username(username):
            return "Error: username cannot contain spaces or special characters."
        if len(password) < 8:
            return "Error: password must be at least 8 characters."
        if not self.validate_password_characters(password):
            return "Error: password must contain at least one capital letter and one special character and no spaces."
        if email in self.users_db:
            return "Error: email already in use."
        if self.validate_Fname(first_name):
            return "Error: First name has a special character."
        if self.validate_Lname(last_name):
            return "Error: Last name has a special character or space in it."
        self.users_db[username] = {"password": password, "fname": first_name, "lname": last_name, "email": email}
        return f"User {username} registered successfully."

    def is_logged_in(self, username):
        return username in self.logged_in_users

    def login_user(self, username, password):
        if username not in self.users_db:
            return "Error: Invalid username or password."
        if self.users_db[username]["password"] != password:
            return "Error: Invalid username or password."
        self.logged_in_users.add(username)
        return f"User {username} logged in successfully."

    def logout_user(self, username):
        if self.is_logged_in(username):
            self.logged_in_users.remove(username)
            return f"User {username} logged out."
        return "Error: Invalid username or password."

# used for some testing
if __name__ == "__main__":
    client_account = ClientAccount()

    print(client_account.register_user("john_doe", "Password123!",  "john@example.com", "john", "doe"))  # Register user
    print(client_account.login_user("john_doe", "Password123!"))  # Successful login
    print(client_account.is_logged_in("john_doe"))  # Check login status (True)
    print(client_account.logout_user("john_doe"))  # Logout user
    print(client_account.is_logged_in("john_doe"))  # Check login status (False)
