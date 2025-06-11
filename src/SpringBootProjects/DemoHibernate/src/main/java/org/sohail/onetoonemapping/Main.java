package org.sohail.onetoonemapping;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.sohail.onetoonemapping.StudentManagementService;

import java.util.Scanner;

public class Main {
    private static Scanner sc;

    private static void displayMenu() {
        System.out.println("-------- MENU --------");
        System.out.println("1. Add a student");
        System.out.println("2. Display all students");
        System.out.println("3. Display students with a specific Laptop");
        System.out.println("4. Update student name");
        System.out.println("5. Delete a student by ID");
        System.out.println("6. Exit");
        System.out.println("----------------------");
    }
    public static void main(String[] args) {
        StudentManagementService sms = new StudentManagementService();
        sc = new Scanner(System.in);

        menu:
        do {
            displayMenu();

            System.out.print("\n>> Enter choice: ");
            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    sms.addStudent();
                    addLineBreak();
                    break;
                case 2:
                    sms.displayAllStudents();
                    addLineBreak();
                    break;
                case 3:
                    sms.displayStudentsByLaptopBrand();
                    addLineBreak();
                    break;
                case 4:
                    sms.updateStudentName();
                    addLineBreak();
                    break;
                case 5:
                    sms.deleteStudentById();
                    addLineBreak();
                    break;
                case 6:
                    sms.closeSession();
                    break menu;
                default:
                    System.out.println("Invalid choice.");
            }
        } while (true);
    }

    private static void addLineBreak() {
        System.out.println();
    }
}
