package org.sohail.manytomanymapping;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        SessionFactory sf = new Configuration()
                .addAnnotatedClass(Employee.class)
                .addAnnotatedClass(Vehicle.class)
                .configure()
                .buildSessionFactory();

        Session session = sf.openSession();

        // Create an Employee and associate vehicles

        Employee employee1 = new Employee();
        employee1.setId(101);
        employee1.setName("John Doe");

        Employee employee2 = new Employee();
        employee2.setId(102);
        employee2.setName("Jane Smith");

        Employee employee3 = new Employee();
        employee3.setId(103);
        employee3.setName("Alice Johnson");


        // Create a Vehicle
        Vehicle vehicle1 = new Vehicle();
        vehicle1.setvId(1);
        vehicle1.setBrand("Toyota");
        vehicle1.setModel("Corolla");

        Vehicle vehicle2 = new Vehicle();
        vehicle2.setvId(2);
        vehicle2.setBrand("Honda");
        vehicle2.setModel("Civic");

        Vehicle vehicle3 = new Vehicle();
        vehicle3.setvId(3);
        vehicle3.setBrand("Ford");
        vehicle3.setModel("Focus");

        // Associate vehicles with employees
        vehicle1.setEmployees(List.of(employee1, employee2));
        vehicle2.setEmployees(List.of(employee1, employee3));
        vehicle3.setEmployees(List.of(employee2, employee3));

        // Associate employees with vehicles
        employee1.setVehicles(List.of(vehicle1, vehicle2));
        employee2.setVehicles(List.of(vehicle1, vehicle3));
        employee3.setVehicles(List.of(vehicle2, vehicle3));


        Transaction transaction = session.beginTransaction();

        // Save the Employee and Vehicles
        session.persist(employee1);
        session.persist(employee2);
        session.persist(employee3);

        session.persist(vehicle1);
        session.persist(vehicle2);
        session.persist(vehicle3);

        transaction.commit();


        // Close the session and session factory
        session.close();
        sf.close();
    }
}
