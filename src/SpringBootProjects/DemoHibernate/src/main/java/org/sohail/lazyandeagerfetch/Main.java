package org.sohail.lazyandeagerfetch;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        SessionFactory sf = new Configuration()
                .addAnnotatedClass(Customer.class)
                .addAnnotatedClass(Product.class)
                .configure()
                .buildSessionFactory();

        Session session = sf.openSession();

        Product product1 = new Product();
        product1.setProductName("Laptop");

        Product product2 = new Product();
        product2.setProductName("Smartphone");

        Product product3 = new Product();
        product3.setProductName("Tablet");

        Product product4 = new Product();
        product4.setProductName("Smartwatch");

        List<Product> products1 = List.of(product1, product2);
        List<Product> products2 = List.of(product3, product4);

        Customer customer1 = new Customer();
        customer1.setName("Alice");
        customer1.setProducts(products1);

        Customer customer2 = new Customer();
        customer2.setName("Bob");
        customer2.setProducts(products2);

        session.beginTransaction();

        session.persist(product1);
        session.persist(product2);
        session.persist(product3);
        session.persist(product4);

        session.getTransaction().commit();
        session.beginTransaction();

        session.persist(customer1);
        session.persist(customer2);

        session.getTransaction().commit();

        // When inside same session, select query is not fired
        Customer customer = session.get(Customer.class, 1);
        System.out.println("Customer: " + customer);

        session.close();

        // Creating a new session
        session = sf.openSession();
        customer = session.get(Customer.class, 2);
        // This will trigger a select query to fetch products lazily
        // In below print statement, products will not be included in the select query
        System.out.println("Customer: " + customer);
        // In below print statement, products will be included in the select query, as we're using it
        // System.out.println(customer.getProducts());
        session.close();

        sf.close();
    }
}
