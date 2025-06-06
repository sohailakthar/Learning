package Interfaces.example2;

public class SMSNotifier implements Notifier {

	@Override
	public void notify(String message) {
		System.out.println("Notifying via SMS.");
		System.out.println("Message: " + message);
	}

}
