package org.sohail.crudoperations;

import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    private static Scanner sc;

    private static void displayMenu() {
        System.out.println("-------- MENU --------");
        System.out.println("1. Add a student");
        System.out.println("2. Display all students");
        System.out.println("3. Display students of a specific city");
        System.out.println("4. Display student names");
        System.out.println("5. Update student name");
        System.out.println("6. Delete a student by ID");
        System.out.println("7. Exit");
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
                    sms.displayStudentsByCity();
                    addLineBreak();
                    break;
                case 4:
                    sms.displayStudentNames();
                    addLineBreak();
                    break;
                case 5:
                    sms.updateStudentName();
                    addLineBreak();
                    break;
                case 6:
                    sms.deleteStudentById();
                    addLineBreak();
                    break;
                case 7:
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