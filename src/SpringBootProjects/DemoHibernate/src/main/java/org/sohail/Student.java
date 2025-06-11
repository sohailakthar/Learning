package org.sohail;

import jakarta.persistence.*;

@Entity
public class Student {
    @Id
    private int sId;

    @Column(name = "name")
    private String sName;

    @Transient
    @Column(name = "age")
    private int sAge;

    @Embedded
    private Address address;

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

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public int getsAge() {
        return sAge;
    }

    public void setsAge(int sAge) {
        this.sAge = sAge;
    }

    @Override
    public String toString() {
        return "Student{" +
                "sId=" + sId +
                ", sName='" + sName + '\'' +
                ", sAge=" + sAge +
                ", address=" + address +
                '}';
    }
}
