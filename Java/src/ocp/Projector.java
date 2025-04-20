package ocp;

public class Projector implements Device {
	private static final String DEVICE_NAME = "Projector";

	@Override
	public void turnOn() {
		System.out.println("Turning on " + DEVICE_NAME + "....");
	}

	@Override
	public void turnOff() {
		System.out.println("Turning off " + DEVICE_NAME + "....");
	}

	@Override
	public String getDeviceName() {
		return DEVICE_NAME;
	}
	
}
