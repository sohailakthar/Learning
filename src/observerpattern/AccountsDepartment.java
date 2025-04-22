package observerpattern;

public class AccountsDepartment implements Observer {

	@Override
	public void notifyObserver() {
		System.out.println("Notified the Accounts Department");
	}

}

