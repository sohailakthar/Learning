package observerpattern;

import java.util.ArrayList;

public class EmployeeDAO {
	ArrayList<Employee> employeeList = new ArrayList<Employee>();
	
	public EmployeeDAO() {
		Employee emp1 = new Employee(1, "Sohail");
		Employee emp2 = new Employee(2, "Shoaib");
		Employee emp3 = new Employee(3, "Faizan");
		
		employeeList.add(emp1);
		employeeList.add(emp1);
		employeeList.add(emp1);
	}
	
	protected void addEmployee(Employee emp) {
		employeeList.add(emp);
	}
	
}
