package Interfaces;

public abstract class Animal {
	public void walk() {
		System.out.println("Walking...");
	}
	
	public void eat() {
		System.out.println("Eating...");
	}
	
	public abstract void sound();
}
