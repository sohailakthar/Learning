package Interfaces.example2;

public class EmailNotifier implements Notifier {

	@Override
	public void notify(String message) {
		System.out.println("Notifying via email.");
		System.out.println("Message: " + message);
	}
	
}
