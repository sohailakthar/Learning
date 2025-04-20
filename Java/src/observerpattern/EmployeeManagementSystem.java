package observerpattern;

import java.util.ArrayList;

public class EmployeeManagementSystem {
	EmployeeDAO empDAO = new EmployeeDAO();
	ArrayList<Observer> observers = new ArrayList<>();
	
	protected void registerObserver(Observer obs) {
		observers.add(obs);
	}
	
	protected void hireNewEmployee(Employee emp) {
		empDAO.addEmployee(emp);
		System.out.println("Added Employee: " + emp.toString());
		
		for(Observer observer : observers) {
			observer.notifyObserver();
		}
	}
}
