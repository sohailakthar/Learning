package employeems;

import java.util.Scanner;

public class Main {
	private static EmployeeManagementService ems;
	private static Scanner sc;	
	
	private static void displayMenu() {
		System.out.println("\n----------------------------------------");
		System.out.println("1. Add an Employee");
		System.out.println("2. Update Employee Status");
		System.out.println("3. Delete an Employee");
		System.out.println("4. Display all Employees");
		System.out.println("5. Display working Employees");
		System.out.println("6. Exit");
		System.out.println("----------------------------------------\n");
	}
	
	public static void main(String[] args) {
		ems = new EmployeeManagementService();
		sc = new Scanner(System.in);
		
		menu:
		do {
			displayMenu();
			
			System.out.print("Enter your choice: ");
			int choice = sc.nextInt();
			sc.nextLine();
			
			switch(choice) {
			case 1:
				System.out.println("");
				ems.addEmployee();
				break;
			case 2:
				System.out.println("");
				ems.updateEmployeeWorkingStatus();
				break;
			case 3:
				System.out.println("");
				ems.deleteEmployee();
				break;
			case 4:
				System.out.println("");
				ems.displayAllEmployees();
				break;
			case 5:
				System.out.println("");
				ems.displayWorkingEmployees();
				break;
			case 6:
				System.out.println("");
				ems.closeConnection(); 
				break menu;
			default:
				System.out.println("\nInvalid choice! Please select between 1-4");
			}
		} while(true);
	}
}
