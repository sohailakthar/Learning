package ocp;

public class RemoteControl {
	public static void selectDevice(Device device) {
		System.out.println("You've selected: " + device.getDeviceName());
	}
	
	public void turnOn(Device device) {
		device.turnOn();
	}
	
	public void turnOff(Device device) {
		device.turnOff();
	}
}
