import {Account} from '../src/account';
import { describe, expect, test } from '@jest/globals';

describe('testing service file', () => {
    const account = new Account();

    //Create Account
    test('success', () =>{
        expect(account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe")).toBe("User john_doe registered successfully.")
        account.delete_user("john_doe", "Password123!", "john@example.com")
    });

    test('wrong email format', () =>{
        expect(account.register_user("john_doe", "Password123!", "johnexample.com", "john", "doe")).toBe("Error: invalid email")
    });

    test('exceptional email', () =>{
        expect(account.register_user("john_doe", "Password123!", "john!@example.com", "john", "doe")).toBe("Error: invalid email")
    });

    test('wrong password format', () =>{
        expect(account.register_user("john_doe", "pasword", "john@example.com", "john", "doe")).toBe("Error: password must be at least 8 characters.")
    });

    test('exceptional password', () =>{
        expect(account.register_user("john_doe", "password", "john@example.com", "john", "doe")).toBe( "Error: password must contain at least one capital letter and one special character and no spaces.")
    });

    test('wrong username format', () =>{
        expect(account.register_user("john", "Password123!", "john@example.com", "john", "doe")).toBe("Error: username must be between 8 and 20 characters.")
    });

    test('exceptional username', () =>{
        expect(account.register_user("john doe", "Password123!", "john@example.com", "john", "doe")).toBe("Error: username cannot contain spaces or special characters.")
    });

    test('database check', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe");
        expect(account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe")).toBe("Error: username already exists.")
        account.delete_user("john_doe", "Password123!", "john@example.com")
    });


    test('good firstname', () =>{
        expect(account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe")).toBe("User john_doe registered successfully.")
    });

    test('bad firstname', () =>{
        expect(account.register_user("john_doe", "Password123!",  "john@example.com", "john2", "doe")).toBe("Error: first name contains invalid characters.")
    });

    test('empty firstname', () =>{
        expect(account.register_user("john_doe", "Password123!", "john@example.com", "", "doe")).toBe("Error: first and last name must not be empty.")
    });

    test('exceptional firstname', () =>{
        expect(account.register_user("john_doe", "Password123!", "john@example.com", "john@3", "doe")).toBe("Error: first name contains invalid characters.")
    });


    test('invalid lastname', () =>{
        expect(account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe12")).toBe("Error: last name contains invalid characters.")
    });

    test('exceptional lastname', () =>{
        expect(account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe!@#")).toBe("Error: last name contains invalid characters.")
    });


    //Login
    test('good login', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
        expect(account.login_user("john_doe", "Password123!")).toBe("User john_doe logged in successfully.")
    });

    test('invalid password', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe")
        expect(account.login_user("john_doe", "Password")).toBe("Error: Invalid username or password.")
    });

    test('exceptional password', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
        expect(account.login_user("john_doe", "Password 1")).toBe("Error: Invalid username or password.")
    });

    test('invalid username', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
        expect(account.login_user("john", "Password 1")).toBe("Error: Invalid username or password.")
    });

    test('exceptional username', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
        expect(account.login_user("", "Password 1")).toBe("Error: Invalid username or password.")
    });


    //Logout
    test('good logout', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe") 
        account.login_user("john_doe", "Password123!")
        expect(account.logout_user("john_doe")).toBe("User john_doe logged out.")
    });

    test('bad logout', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe")
        account.login_user("john_doe", "Password123!")
        expect(account.logout_user("johnDoe")).toBe("Error: Invalid username or password.")
    });


    //Delete account
    test('delete success', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe");
        expect(account.delete_user("john_doe", "Password123!", "john@example.com")).toBe("User deleted successfully")
    });

    test('wrong email format', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe");
        expect(account.delete_user("john_doe", "Password123!", "johnexample.com")).toBe("Error: Invalid email.")
    });

    test('exceptional email', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe");
        expect(account.delete_user("john_doe", "Password123!", "john!@example.com")).toBe("Error: Invalid email.")
    });

    test('wrong username format', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe");
        expect(account.delete_user("john_doe", "pasword", "john@example.com")).toBe("Error: Invalid password.")
    });

    test('wrong username format', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe");
        expect(account.delete_user("john_doe", "", "john@example.com")).toBe("Error: Invalid password.")
    });

    test('wrong username format', () =>{
        account.register_user("john_doe", "Password123!", "john@example.com", "john", "doe");
        expect(account.delete_user("john", "Password123!", "john@example.com")).toBe("Error: User not found")
    });

    test('wrong username format', () =>{
        account.register_user("john", "Password123!", "john@example.com", "john", "doe");
        expect(account.delete_user("", "Password123!", "john@example.com")).toBe("Error: User not found")
    });
});