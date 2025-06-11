package org.sohail.onetomanymapping;

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

        session.beginTransaction();

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

        // Save the Employee and Vehicles
        session.persist(vehicle1);
        session.persist(vehicle2);
        session.persist(vehicle3);
        session.getTransaction().commit();


        // Create an Employee and associate vehicles
        session.beginTransaction();

        Employee employee1 = new Employee();
        employee1.setId(101);
        employee1.setName("John Doe");
        employee1.setVehicles(List.of(vehicle1, vehicle2));

        Employee employee2 = new Employee();
        employee2.setId(102);
        employee2.setName("Jane Smith");
        employee2.setVehicles(List.of(vehicle3));

        session.persist(employee1);
        session.persist(employee2);

        session.getTransaction().commit();

        // Fetch and display all Employees
        List<Employee> employees = session.createQuery("from Employee", Employee.class).getResultList();
        for (Employee employee : employees) {
            System.out.println(employee);
            System.out.println("Vehicles: " + employee.getVehicles());
        }

        // Close the session and session factory
        session.close();
        sf.close();
    }
}
