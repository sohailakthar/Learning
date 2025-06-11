package org.sohail.onetoonemapping;

import jakarta.persistence.*;

@Entity
@Table(name = "student2")
public class Student {
    @Id
    private int sId;
    private String sName;
    @OneToOne
    private Laptop laptop;

    public int getsId() {
        return sId;
    }

    public void setsId(int sId) {
        this.sId = sId;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public Laptop getLaptop() {
        return laptop;
    }

    public void setLaptop(Laptop laptop) {
        this.laptop = laptop;
    }

    @Override
    public String toString() {
        return "Student{" +
                "sId=" + sId +
                ", sName='" + sName + '\'' +
                ", laptop=" + laptop +
                '}';
    }
}
