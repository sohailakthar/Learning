package observerpattern;

public class HRDepartment implements Observer {

	@Override
	public void notifyObserver() {
		System.out.println("Notified the HR Department");
	}

}
