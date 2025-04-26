

class Account {
    username: string = '';
    password: string = '';
    firstname: string = '';
    lastname: string = '';
    email: string = '';
    usertype: string = '';




    // validate email address
    validate_email(email: string): boolean {
        const email_pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;
        return email_pattern.test(email);
    }

    // validate password (capital letter, special character, no spaces)
    validate_password_characters(password: string): boolean {
        let valid_password_characters = false;
        let uppercase_letter_found = false;
        let special_character_found = false;
        let space_detected = false;

        for (const character of password) {
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
    }

    // validate username
    validate_username(username: string): boolean {
        let valid_username_characters = true;
        let special_character_found = false;

        for (const character of username) {
            if (character.trim() === '') {
                valid_username_characters = false;
            }
            // username can have _ or - but no other special characters
            if ("~`!@#$%^&*()+={[}]|\\:;\"'<,>.?/".includes(character)) {
                special_character_found = true;
            }
        }
        return valid_username_characters && !special_character_found;
    }

    validate_first_name(first_name: string): boolean {
        let valid_first_name_characters = true;

        for (const character of first_name) {
            if ("~`!@#$%^&*()+={[}]|\\:;\"<,>.?/".includes(character)) {
                valid_first_name_characters = false;
            }
            if (/\d/.test(character)) {
                valid_first_name_characters = false;
            }
        }
        return valid_first_name_characters;
    }

    validate_last_name(last_name: string): boolean {
        let valid_last_name_characters = true;

        for (const character of last_name) {
            if ("~`!@#$%^&*()+={[}]|\\:;\"<,>.?/".includes(character)) {
                valid_last_name_characters = false;
            }
            if (/\d/.test(character)) {
                valid_last_name_characters = false;
            }
        }
        return valid_last_name_characters;
    }
    register_user(username: string, password: string, email: string, first_name: string, last_name: string): string {
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
        // if (this.users_db[username]) {
        //     return "Error: username already exists.";
        // }
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
        // if (this.users_db[email]) {
        //     return "Error: email already in use.";
        // }
        //const emailExist = Object.values(this.users_db).some(user => user.email === email);

        // if(emailExist){
        //     return "Error: Email already in use.";
        // }
        
        //this.users_db[username] = { password, fname: first_name, lname: last_name, email };
        return `User ${username} registered successfully.`;
    }

    delete_user(username: string, password: string, email: string){
        //const user = this.users_db[username];
        // if(!user){
        //     return "Error: User not found";
        // }
        // if(user.password!== password){
        //     return "Error: Invalid password."
        // }
        //delete this.users_db[username];
        //this.logged_in_users.delete(username);
        return 'User deleted successfully';
    }
    
    update_user(username: string, currentPassword: string, updates: { newPassword?: string, newEmail?: string, newFirstName?: string, newLastName?: string}): string {
        //const user = this.users_db[username];
        // if (!user){
        //     return "Error: User not found.";
        // }
        // if (user.password !== currentPassword) {
        //     return "Error: Invalid current password.";
        // }
        // if (updates.newEmail) {
        //     if (!this.validate_email(updates.newEmail)) 
        //         return "Error: Invalid new email.";
        //     const emailExists = Object.values(this.users_db).some(u => u.email === updates.newEmail);
        //     if (emailExists) 
        //         return "Error: New email already in use.";
        //     user.email = updates.newEmail;
        // }

        // if (updates.newPassword) {
        //     if (!this.validate_password_characters(updates.newPassword)) 
        //         return "Error: New password does not meet requirements.";
        //     user.password = updates.newPassword;
        // }

        // if (updates.newFirstName) {
        //     if (!this.validate_first_name(updates.newFirstName)) 
        //         return "Error: Invalid first name.";
        //     user.fname = updates.newFirstName;
        // }

        // if (updates.newLastName) {
        //     if (!this.validate_last_name(updates.newLastName)) 
        //         return "Error: Invalid last name.";
        //     user.lname = updates.newLastName;
        // }

        return "User details updated successfully.";
    }

    // is_logged_in(username: string): boolean {
    //     return this.logged_in_users.has(username);
    // }

    // login_user(username: string, password: string): string {
    //     if (!this.users_db[username]) {
    //         return "Error: Invalid username or password.";
    //     }
    //     if (this.users_db[username].password !== password) {
    //         return "Error: Invalid username or password.";
    //     }
    //     this.logged_in_users.add(username);
    //     return `User ${username} logged in successfully.`;
    // }

    // logout_user(username: string): string {
    //     if (this.is_logged_in(username)) {
    //         this.logged_in_users.delete(username);
    //         return `User ${username} logged out.`;
    //     }
    //     return "Error: Invalid username or password.";
    // }

}

export default Account;