package com.sohail.SpringBootDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Laptop {

    @Autowired
    private CPU cpu;

    public void compile() {
        System.out.println("Compile started!");
        cpu.process();
    }
}
