package factorydesignpattern;

public class Car implements Vehicle {

	@Override
	public void startEngine() {
		System.out.println("Starting engine of a car...");
	}
	
}
