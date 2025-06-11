package org.sohail.crudoperations;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StudentManagementService {
    private SessionFactory sf;
    private Session session;
    private Scanner sc;

    public StudentManagementService() {
        sf = new Configuration()
                .addAnnotatedClass(Student.class)
                .configure()
                .buildSessionFactory();

        session = sf.openSession();

        sc = new Scanner(System.in);
    }

    public void addStudent() {
        Student student = new Student();
        Address address = new Address();

        System.out.print("Enter student ID: ");
        student.setsId(sc.nextInt());
        sc.nextLine();

        System.out.print("Enter Name: ");
        student.setsName(sc.nextLine());

        System.out.print("Enter Age: ");
        student.setsAge(sc.nextInt());
        sc.nextLine();

        System.out.print("Enter City: ");
        address.setCity(sc.nextLine());

        System.out.print("Enter State: ");
        address.setState(sc.nextLine());

        student.setAddress(address);

        Transaction transaction = session.beginTransaction();

        session.persist(student);
        transaction.commit();
    }

    public void displayAllStudents() {
        List<Student> studentList = new ArrayList<>();
        studentList = session.createQuery("SELECT a FROM Student a").getResultList();

        studentList.stream()
                .forEach(System.out::println);
    }

    public void displayStudentsByCity() {
        List<Student> studentList = new ArrayList<>();

        System.out.print("Enter the city name: ");
        String desiredCity = sc.nextLine();

        studentList = session.createQuery("SELECT a FROM Student a WHERE a.address.city = :desiredCity", Student.class)
                .setParameter("desiredCity", desiredCity)
                .getResultList();

        studentList.stream()
                .forEach(System.out::println);
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
