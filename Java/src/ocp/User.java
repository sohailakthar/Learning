package ocp;

public class User {
	public static void main(String[] args) {
		RemoteControl remote = new RemoteControl();
		TV tv = new TV();
		Projector projector = new Projector();
		
		remote.selectDevice(projector);
		remote.turnOn(projector);
		remote.turnOff(projector);
		
		remote.selectDevice(tv);
		remote.turnOn(tv);
		remote.turnOff(tv);
	}
}
