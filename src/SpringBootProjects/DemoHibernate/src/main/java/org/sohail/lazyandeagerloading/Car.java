package org.sohail.lazyandeagerloading;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Car {
    @Id
    private int cId;
    private String name;
    private int model;

    public int getcId() {
        return cId;
    }

    public void setcId(int cId) {
        this.cId = cId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getModel() {
        return model;
    }

    public void setModel(int model) {
        this.model = model;
    }

    @Override
    public String toString() {
        return "Car{" +
                "cId=" + cId +
                ", name='" + name + '\'' +
                ", model=" + model +
                '}';
    }
}
