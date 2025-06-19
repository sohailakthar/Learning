package org.sohail;

public class Alien {

    private int age;
    private int salary;
    private Computer computer;

    public Alien() {
    }

    //Parameterized constructor


    public Alien(int age, int salary, Laptop computer) {
        this.age = age;
        this.salary = salary;
        this.computer = computer;
    }

    public void code() {
        computer.compile();
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public Computer getComputer() {
        return computer;
    }

    public void setComputer(Computer computer) {
        this.computer = computer;
    }
}
