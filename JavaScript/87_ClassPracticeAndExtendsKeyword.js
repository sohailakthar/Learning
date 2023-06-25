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

const animal1 = new Animal("chub", 2);
console.log(animal1);
animal1.eating();