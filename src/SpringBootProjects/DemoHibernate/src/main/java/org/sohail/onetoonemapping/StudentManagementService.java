package org.sohail.onetoonemapping;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.sohail.onetoonemapping.Laptop;
import org.sohail.onetoonemapping.Student;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StudentManagementService {
    private SessionFactory sf;
    private Session session;
    private Scanner sc;

    public StudentManagementService() {
        sf = new Configuration()
                .addAnnotatedClass(org.sohail.onetoonemapping.Student.class)
                .addAnnotatedClass(org.sohail.onetoonemapping.Laptop.class)
                .configure()
                .buildSessionFactory();

        session = sf.openSession();

        sc = new Scanner(System.in);
    }

    public void addStudent() {
        Student student = new Student();
        Laptop laptop = new Laptop();

        System.out.print("Enter student ID: ");
        student.setsId(sc.nextInt());
        sc.nextLine();

        System.out.print("Enter Name: ");
        student.setsName(sc.nextLine());

        System.out.print("Enter Laptop Brand: ");
        laptop.setBrand(sc.nextLine());

        System.out.print("Enter Laptop Model: ");
        laptop.setModel(sc.nextLine());

        student.setLaptop(laptop);

        Transaction transaction = session.beginTransaction();

        session.persist(laptop);
        session.persist(student);
        transaction.commit();
    }

    public void displayAllStudents() {
        List<Student> studentList = new ArrayList<>();
        studentList = session.createQuery("SELECT a FROM Student a").getResultList();

        studentList.stream()
                .forEach(System.out::println);
    }

    public void displayStudentsByLaptopBrand() {
        System.out.print("Enter the laptop brand: ");
        String brand = sc.nextLine();

        List<Student> studentList = session.createQuery(
                "SELECT s FROM Student s WHERE s.laptop.brand = :brand", Student.class)
                .setParameter("brand", brand)
                .getResultList();

        studentList.forEach(System.out::println);
    }

    public void updateStudentName() {
        System.out.print("Enter the student ID: ");
        int sId = sc.nextInt();
        sc.nextLine();

        Student student = session.get(Student.class, sId);

        System.out.print("Enter the updated name: ");
        String updatedStudentName = sc.nextLine();

        student.setsName(updatedStudentName);

        Transaction transaction = session.beginTransaction();
        session.merge(student);
        transaction.commit();
    }

    public void deleteStudentById() {
        System.out.print("Enter the student ID: ");
        int sId = sc.nextInt();
        sc.nextLine();

        Student student = session.get(Student.class, sId);

        Transaction transaction = session.beginTransaction();
        session.remove(student);
        transaction.commit();
    }

    public void closeSession() {
        sf.close();
        session.close();
    }
}
