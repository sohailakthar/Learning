package org.sohail;

import jakarta.persistence.Embeddable;

@Embeddable
public class Address {
    private String city;
    private String state;

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        state = state;
    }

    @Override
    public String toString() {
        return "Address{" +
                "city='" + city + '\'' +
                ", state='" + state + '\'' +
                '}';
    }
}
