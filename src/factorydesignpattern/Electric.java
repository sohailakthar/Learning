package factorydesignpattern;

public class Electric implements Vehicle {

	@Override
	public void startEngine() {
		System.out.println("Starting engine of a electric...");
	}
	
}
