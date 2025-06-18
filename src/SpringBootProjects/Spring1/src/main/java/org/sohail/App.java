package org.sohail;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App
{
    public static void main( String[] args )
    {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");

        Alien alien1 = (Alien) context.getBean("alien");
        Alien alien2 = (Alien) context.getBean("alien");

        alien1.code();
        alien2.code();
    }
}
