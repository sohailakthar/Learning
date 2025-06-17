package org.sohail.lazyandeagerloading;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Main {
    public static void main(String[] args) {
        SessionFactory sf = new Configuration()
                .addAnnotatedClass(Car.class)
                .configure()
                .buildSessionFactory();

        Session session = sf.openSession();

        // Get - Eager Fetching (Fires select query immediately)
        // Car car1 = session.get(Car.class, 1);
        // System.out.println("Car Details: " + car);

        // Load - Lazy Fetching (Fires select query when the object is accessed)
        // But this is deprecated.
        // Car car2 = session.load(Car.class, 1);

        // Using byId instead of load
        // Works as Load (i.e Lazy fetching)
        Car car3 = session.byId(Car.class).getReference(2);
        System.out.println("Car Details: " + car3);

        session.close();
        sf.close();
    }
}
