package factorydesignpattern;

public class Truck implements Vehicle {

	@Override
	public void startEngine() {
		System.out.println("Starting engine of a truck...");
	}
	
}
