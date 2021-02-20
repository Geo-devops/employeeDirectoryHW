const fs = require("fs");
const inquirer = require("inquirer");

class Employee {
    constructor(firstname,lastname,id,email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
        this.email = email;
    };
    getFirstName() {
        return this.firstname;
    };
    getLastName() {
        return this.lastname;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return "Employee";
    };      
}

module.exports = Employee;