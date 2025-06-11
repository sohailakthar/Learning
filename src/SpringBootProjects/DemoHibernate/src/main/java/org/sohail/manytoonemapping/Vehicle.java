package org.sohail.manytoonemapping;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Vehicle {
    @Id
    private int vId;
    private String brand;
    private String model;
    @ManyToOne
    private Employee employee;

    public int getvId() {
        return vId;
    }

    public void setvId(int vId) {
        this.vId = vId;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "vId=" + vId +
                ", brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", employee=" + employee +
                '}';
    }
}
