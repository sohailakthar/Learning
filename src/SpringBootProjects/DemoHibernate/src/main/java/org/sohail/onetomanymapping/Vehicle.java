package org.sohail.onetomanymapping;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Vehicle {
    @Id
    private int vId;
    private String brand;
    private String model;

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

    @Override
    public String toString() {
        return "Vehicle{" +
                "vId=" + vId +
                ", brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                '}';
    }
}
