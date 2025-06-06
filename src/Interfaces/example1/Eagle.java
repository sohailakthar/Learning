package Interfaces.example1;

public class Eagle extends Animal implements Flyable, Jumpable{

	@Override
	public void jump() {
		System.out.println("Jumping...");
	}

	@Override
	public void fly() {
		System.out.println("Flying...");
	}

	@Override
	public void sound() {
		System.out.println("Screech...");
	}

}
