"use strict";

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static isAlive = true;

    static printDetails() {
        console.log(`Person has a name, breathes if alive=${Person.isAlive}, eats to be alive.`);
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullname) {
        [this.firstName, this.lastName] = fullname.split(" ");
    }
}

const person1 = new Person("Sohail", "Akthar", 20);

console.log(person1.fullName);

person1.fullName = "Shaik Shoaib Akthar";

console.log(person1.fullName);

Person.printDetails();  // Static methods can be called by using the class name itself, without having to create object