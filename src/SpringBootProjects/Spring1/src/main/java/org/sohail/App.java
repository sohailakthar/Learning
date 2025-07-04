package org.sohail;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App
{
    public static void main( String[] args )
    {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");

        Alien alien1 = (Alien) context.getBean("alien");
        System.out.println("Age: " + alien1.getAge());
        System.out.println("Salary: " + alien1.getSalary());
        alien1.code();
    }
}
