"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account() {
        this.users_db = {}; // Simulate database for user accounts
        this.logged_in_users = new Set(); // Track users logged in
    }
    // validate email address
    Account.prototype.validate_email = function (email) {
        var email_pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;
        return email_pattern.test(email);
    };
    // validate password (capital letter, special character, no spaces)
    Account.prototype.validate_password_characters = function (password) {
        var valid_password_characters = false;
        var uppercase_letter_found = false;
        var special_character_found = false;
        var space_detected = false;
        for (var _i = 0, password_1 = password; _i < password_1.length; _i++) {
            var character = password_1[_i];
            if (character === character.toUpperCase() && character !== character.toLowerCase()) {
                uppercase_letter_found = true;
            }
            if ("~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/".includes(character)) {
                special_character_found = true;
            }
            if (character.trim() === '') {
                space_detected = true;
            }
        }
        if (uppercase_letter_found && special_character_found && !space_detected) {
            valid_password_characters = true;
        }
        return valid_password_characters;
    };
    // validate username
    Account.prototype.validate_username = function (username) {
        var valid_username_characters = true;
        var special_character_found = false;
        for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
            var character = username_1[_i];
            if (character.trim() === '') {
                valid_username_characters = false;
            }
            // username can have _ or - but no other special characters
            if ("~`!@#$%^&*()+={[}]|\\:;\"'<,>.?/".includes(character)) {
                special_character_found = true;
            }
        }
        return valid_username_characters && !special_character_found;
    };
    Account.prototype.validate_first_name = function (first_name) {
        var valid_first_name_characters = true;
        for (var _i = 0, first_name_1 = first_name; _i < first_name_1.length; _i++) {
            var character = first_name_1[_i];
            if ("~`!@#$%^&*()+={[}]|\\:;\"<,>.?/".includes(character)) {
                valid_first_name_characters = false;
            }
            if (/\d/.test(character)) {
                valid_first_name_characters = false;
            }
        }
        return valid_first_name_characters;
    };
    Account.prototype.validate_last_name = function (last_name) {
        var valid_last_name_characters = true;
        for (var _i = 0, last_name_1 = last_name; _i < last_name_1.length; _i++) {
            var character = last_name_1[_i];
            if ("~`!@#$%^&*()+={[}]|\\:;\"<,>.?/".includes(character)) {
                valid_last_name_characters = false;
            }
            if (/\d/.test(character)) {
                valid_last_name_characters = false;
            }
        }
        return valid_last_name_characters;
    };
    Account.prototype.register_user = function (username, password, email, first_name, last_name) {
        if (first_name.length < 1 || last_name.length < 1) {
            return "Error: first and last name must not be empty.";
        }
        if (!this.validate_first_name(first_name)) {
            return "Error: first name contains invalid characters.";
        }
        if (!this.validate_last_name(last_name)) {
            return "Error: last name contains invalid characters.";
        }
        if (!this.validate_email(email)) {
            return "Error: invalid email";
        }
        if (this.users_db[username]) {
            return "Error: username already exists.";
        }
        if (username.length < 8 || username.length > 20) {
            return "Error: username must be between 8 and 20 characters.";
        }
        if (!this.validate_username(username)) {
            return "Error: username cannot contain spaces or special characters.";
        }
        if (password.length < 8) {
            return "Error: password must be at least 8 characters.";
        }
        if (!this.validate_password_characters(password)) {
            return "Error: password must contain at least one capital letter and one special character and no spaces.";
        }
        if (this.users_db[email]) {
            return "Error: email already in use.";
        }
        var emailExist = Object.values(this.users_db).some(function (user) { return user.email === email; });
        if (emailExist) {
            return "Error: Email already in use.";
        }
        this.users_db[username] = { password: password, fname: first_name, lname: last_name, email: email };
        return "User ".concat(username, " registered successfully.");
    };
    Account.prototype.delete_user = function (username, password, email) {
        var user = this.users_db[username];
        if (!user) {
            return "Error: User not found";
        }
        if (user.password !== password) {
            return "Error: Invalid password.";
        }
        if (user.email !== email) {
            return "Error: Invalid email.";
        }
        delete this.users_db[username];
        this.logged_in_users.delete(username);
        return 'User deleted successfully';
    };
    Account.prototype.update_user = function (username, currentPassword, updates) {
        var user = this.users_db[username];
        if (!user) {
            return "Error: User not found.";
        }
        if (user.password !== currentPassword) {
            return "Error: Invalid current password.";
        }
        if (updates.newEmail) {
            if (!this.validate_email(updates.newEmail))
                return "Error: Invalid new email.";
            var emailExists = Object.values(this.users_db).some(function (u) { return u.email === updates.newEmail; });
            if (emailExists)
                return "Error: New email already in use.";
            user.email = updates.newEmail;
        }
        if (updates.newPassword) {
            if (!this.validate_password_characters(updates.newPassword))
                return "Error: New password does not meet requirements.";
            user.password = updates.newPassword;
        }
        if (updates.newFirstName) {
            if (!this.validate_first_name(updates.newFirstName))
                return "Error: Invalid first name.";
            user.fname = updates.newFirstName;
        }
        if (updates.newLastName) {
            if (!this.validate_last_name(updates.newLastName))
                return "Error: Invalid last name.";
            user.lname = updates.newLastName;
        }
        return "User details updated successfully.";
    };
    Account.prototype.is_logged_in = function (username) {
        return this.logged_in_users.has(username);
    };
    Account.prototype.login_user = function (username, password) {
        if (!this.users_db[username]) {
            return "Error: Invalid username or password.";
        }
        if (this.users_db[username].password !== password) {
            return "Error: Invalid username or password.";
        }
        this.logged_in_users.add(username);
        return "User ".concat(username, " logged in successfully.");
    };
    Account.prototype.logout_user = function (username) {
        if (this.is_logged_in(username)) {
            this.logged_in_users.delete(username);
            return "User ".concat(username, " logged out.");
        }
        return "Error: Invalid username or password.";
    };
    return Account;
}());
exports.Account = Account;
