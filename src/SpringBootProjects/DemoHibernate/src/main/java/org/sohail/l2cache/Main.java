package org.sohail.l2cache;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Main {
    public static void main(String[] args) {
        SessionFactory sf = new Configuration()
                .addAnnotatedClass(Phone.class)
                .configure()
                .buildSessionFactory();

        Session session1 = sf.openSession();
        Phone p1 = session1.get(Phone.class, 1);
        System.out.println(p1);
        session1.close();

        Session session2 = sf.openSession();
        Phone p2 = session2.get(Phone.class, 1);
        System.out.println(p2);
        session2.close();
        sf.close();
    }
}
