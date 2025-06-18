package org.sohail;

public class Alien {

    private int age;

    public Alien() {
        System.out.println("Alien object created!");
    }

    public void code() {
        System.out.println("Coding...");
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        System.out.println("Setter called.");
        this.age = age;
    }
}
