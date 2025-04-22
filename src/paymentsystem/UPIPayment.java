package paymentsystem;

public class UPIPayment implements Payment {

	@Override
	public void pay(double amount) {
		System.out.println("you've paid " + amount + " using UPI.");
	}

}
