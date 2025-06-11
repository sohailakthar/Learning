package org.sohail.manytoonemapping;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
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
        session.beginTransaction();

        Employee employee1 = new Employee();
        employee1.setId(101);
        employee1.setName("John Doe");

        Employee employee2 = new Employee();
        employee2.setId(102);
        employee2.setName("Jane Smith");

        session.persist(employee1);
        session.persist(employee2);

        session.getTransaction().commit();


        session.beginTransaction();

        // Create a Vehicle
        Vehicle vehicle1 = new Vehicle();
        vehicle1.setvId(1);
        vehicle1.setBrand("Toyota");
        vehicle1.setModel("Corolla");
        vehicle1.setEmployee(employee1);

        Vehicle vehicle2 = new Vehicle();
        vehicle2.setvId(2);
        vehicle2.setBrand("Honda");
        vehicle2.setModel("Civic");
        vehicle2.setEmployee(employee1);

        Vehicle vehicle3 = new Vehicle();
        vehicle3.setvId(3);
        vehicle3.setBrand("Ford");
        vehicle3.setModel("Focus");
        vehicle3.setEmployee(employee2);

        // Save the Employee and Vehicles
        session.persist(vehicle1);
        session.persist(vehicle2);
        session.persist(vehicle3);
        session.getTransaction().commit();


        // Close the session and session factory
        session.close();
        sf.close();
    }
}
