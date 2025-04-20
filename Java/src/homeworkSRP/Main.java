package homeworkSRP;

import java.util.Scanner;

public class Main {
	static ClientModule service = new ClientModule();
	static Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args) {
		while(true) {
			System.out.println("---- What would you like to do? ----");
			System.out.println("---- 1. Save an Employee details ----");
			System.out.println("---- 2. Delete an Employee details ----");
			System.out.println("---- 3. Get an Employee details ----");
			System.out.println("---- 4. Print a complete report ----");
			
			int choice = sc.nextInt();
			
			switch(choice) {
				case 1:
					service.saveEmployee();
					break;
				case 2:
					service.deleteEmployee();
					break;
				case 3:
					service.getEmployeeDetails();
					break;
				case 4:
					service.printReport();
					break;
				default:
					System.out.println("\nInvalid choice. Enter between 1-4");
			}
		}
	}
}
