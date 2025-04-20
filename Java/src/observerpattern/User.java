package observerpattern;

public class User {
	public static void main(String[] args) {
		EmployeeManagementSystem ems = new EmployeeManagementSystem();
		
		Observer hr = new HRDepartment();
		Observer accounts = new AccountsDepartment();
		
		ems.registerObserver(hr);
		ems.registerObserver(accounts);
		
		ems.hireNewEmployee(new Employee(4, "Fahad"));
	}
}
