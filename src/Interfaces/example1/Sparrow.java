package Interfaces.example1;

public class Sparrow extends Animal implements Flyable{

	@Override
	public void fly() {
		System.out.println("Flying...");		
	}

	@Override
	public void sound() {
		System.out.println("Pew pew...");
	}
	
}
