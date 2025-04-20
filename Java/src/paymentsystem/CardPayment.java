package paymentsystem;

public class CardPayment implements Payment {

	@Override
	public void pay(double amount) {
		System.out.println("you've paid " + amount + " using card.");
	}

}
