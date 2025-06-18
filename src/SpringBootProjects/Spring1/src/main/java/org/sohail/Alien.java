package org.sohail;

public class Alien {

    private int age;
    private int salary;
    private Laptop laptop;

    public Alien() {
        System.out.println("Alien object created!");
    }

    //Parameterized constructor


    public Alien(int age, int salary, Laptop laptop) {
        System.out.println("Parameterized constructor called.");
        this.age = age;
        this.salary = salary;
        this.laptop = laptop;
    }

    public void code() {
        System.out.println("Coding...");
        laptop.compile();
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        System.out.println("Setter called.");
        this.age = age;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public Laptop getLaptop() {
        return laptop;
    }

    public void setLaptop(Laptop laptop) {
        this.laptop = laptop;
    }
}
