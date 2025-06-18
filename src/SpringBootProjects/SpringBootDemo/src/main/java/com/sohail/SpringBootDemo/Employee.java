package com.sohail.SpringBootDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Employee {

    @Autowired
    private Laptop laptop;

    public void code() {
        laptop.compile();
    }
}
