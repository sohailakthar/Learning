package Interfaces.example2;

public class User {
	public static void main(String[] args) {
		Notifier emailNotifier = new EmailNotifier();
		Notifier smsNotifier = new SMSNotifier();
		
		String message = "Sohail has published a new video.";
		
		emailNotifier.notify(message);
		smsNotifier.notify(message);
	}
}
