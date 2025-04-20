package paymentsystem;

public class User {
	public static void main(String[] args) {
		Payment paymentMode1 = new CashPayment();
		Payment paymentMode2 = new CardPayment();
		Payment paymentMode3 = new UPIPayment();
		
		paymentMode1.pay(3999.43);
		paymentMode2.pay(634.63);
		paymentMode3.pay(9283.26);
	}
}
