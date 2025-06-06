package librarymanagement;

import java.util.Scanner;

public class Main {
	private static Scanner sc = new Scanner(System.in);
	private static LibraryService service = new LibraryService();
	
	private static void displayMenu() {
		System.out.println("1. Add a book");
		System.out.println("2. Delete a book");
		System.out.println("3. Update a book");
		System.out.println("4. Exit");
	}
	
	public static void main(String[] args) {
		menu:
		do {
			displayMenu();
			System.out.print(">> Enter your choice: ");
			int choice = sc.nextInt();
			
			switch(choice) {
			case 1:
				service.addBook();
				System.out.println();
				break;
			case 2:
				service.deleteBookById();
				System.out.println();
				break;
			case 3:
				service.updateBookById();
				System.out.println();
				break;
			case 4:
				service.closeConnection();
				break menu;
			default:
				System.out.println("Invalid choice!");
			}
		} while(true);
	}
}
