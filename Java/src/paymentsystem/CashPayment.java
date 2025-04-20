package paymentsystem;

public class CashPayment implements Payment {

	@Override
	public void pay(double amount) {
		System.out.println("you've paid " + amount + " using cash.");
	}

}
