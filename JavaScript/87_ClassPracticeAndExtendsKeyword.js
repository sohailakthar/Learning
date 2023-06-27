"use strict";

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eating() {
        console.log("nom nom...");
    }
}

class Dog extends Animal {
    
}
const tommy = new Dog("chub", 2);
console.log(tommy);
tommy.eating();