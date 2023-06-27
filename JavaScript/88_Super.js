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
    constructor(name, age, speed) {
        super(name, age);   // Setting the values of name, age will be handled by Animal class' constructor
        this.speed = speed;
    }

    barking() {
        console.log("woof woof!");
    }

    running() {
        console.log(`${this.name} is running at a speed of ${this.speed}kmph`);
    }
}

const tommy = new Dog("tommy", 12, 45);
tommy.eating();
tommy.barking();
tommy.running();