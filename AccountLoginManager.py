import re

class AccountLoginManager:
    def __init__(self):
        self.users_db = {} # Simulate databse for user accounts
        self.logged_in_users = set() # Track users logged in

    def validate_email(self, email):
        email_pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$"
        return re.match(email_pattern, email) is not None

    def register_user(self, username, password, email):
        if not self.validate_email(email):
            return "Error: invalid email"
        if username in self.users_db:
            return "Error: username already exists."
        if email in self.users_db:
            return "Error: email already in use."
        self.users_db[username] = {"password": password, "email": email}
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

if __name__ == "__main__":
    account_manager = AccountLoginManager()

    print(account_manager.register_user("john_doe", "password123", "john@example.com"))  # Register user
    print(account_manager.login_user("john_doe", "password123"))  # Successful login
    print(account_manager.is_logged_in("john_doe"))  # Check login status (True)
    print(account_manager.logout_user("john_doe"))  # Logout user
    print(account_manager.is_logged_in("john_doe"))  # Check login status (False)