"use strict";

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
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