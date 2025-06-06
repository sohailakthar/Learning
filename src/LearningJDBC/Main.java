package LearningJDBC;

import java.util.Scanner;

public class Main {

	private static void displayMenu() {
		System.out.println("Choose one of the following options: ");
		System.out.println("0. Add a new student");
		System.out.println("1. Show student by ID");
		System.out.println("2. Show all students");
		System.out.println("3. Update student marks by ID");
		System.out.println("4. Delete student by ID");
		System.out.println("5. Close app");
		System.out.println("--------------------------------------------------");
	}

    public static void main(String args[]) {
		StudentService service = new StudentService();
		Scanner sc = new Scanner(System.in);

		menu:
		do {
			displayMenu();
			System.out.println(">> Enter your choice: ");
			int choice = sc.nextInt();
			sc.nextLine();

			switch(choice) {
				case 0:
					service.addStudent();
					break;
				case 1:
					service.getStudentById();
					break;
				case 2:
					service.getAllStudents();
					break;
				case 3:
					service.updateMarksById();
					break;
				case 4:
					service.deleteStudentById();
					break;
				case 5:
					service.closeConnection();
					break menu;
				default:
					System.out.println("Invalid choice!");
			}
		} while(true);
		sc.close();
	}
}
