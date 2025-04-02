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

    def validate_username(self, username):
        valid_username_characters = True
        special_character_found = False
        for character in username:
            if character.isspace():
                valid_username_characters = false
            # username can have _ or - but no other special characters
            if character in "~`!@#$%^&*()+={[}]|\\:;\"'<,>.?/":
                special_character_found = True
        return valid_username_characters and not special_character_found

    def register_user(self, username, password, email, first_name, last_name):
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
