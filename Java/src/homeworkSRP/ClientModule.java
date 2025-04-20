package homeworkSRP;

import java.util.Scanner;

public class ClientModule {
	EmployeeDAO employeeDao = new EmployeeDAO();
	EmployeeReportFormatter reportGenerator = new EmployeeReportFormatter();
	Scanner sc = new Scanner(System.in);
	
	public void saveEmployee() {
		Long id;
		String name;
		String department;
		boolean isWorking;
		
		System.out.print("Enter ID: ");
		id = sc.nextLong();
		sc.nextLine();
		System.out.print("Enter Name: ");
		name = sc.nextLine();
		System.out.print("Enter Department: ");
		department = sc.nextLine();
		System.out.print("Is Working (yes/no): ");
		isWorking = (sc.nextLine().equals("yes") ? true : false);
		
		Employee emp = new Employee(id, name, department, isWorking);
		
		if(employeeDao.saveEmployee(emp)) {
			System.out.println("Employee details saved successfully!");
		} else {
			System.out.println("An error occured. Employee with this ID already exists!");
		}
	}
	
	public void deleteEmployee() {
		System.out.println("Enter employee ID: ");
		Long id = sc.nextLong();
		if(employeeDao.deleteEmployee(id)) {
			System.out.println("Employee details deleted successfully!");
		} else {
			System.out.println("An error occured. Employee with this ID doesn't exists!");
		}
	}
	
	public void printReport() {
		System.out.print("Enter format type (CSV, JSON): ");
		String format = sc.nextLine();
		
		reportGenerator.printCompleteReport(employeeDao.getEmployeeDB(), format);
	}
	
	public void getEmployeeDetails() {
		System.out.print("Enter employee ID: ");
		Long id = sc.nextLong();
		String report = reportGenerator.printEmployeeReport(employeeDao.getEmployeeDB().get(id));
		System.out.println("\n" + report + "\n");
	}
}
