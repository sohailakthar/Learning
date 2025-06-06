package annonymousclass;

class A {
    public void displayName() {
        System.out.println("Class name is A");
    }

    public void displayDate() {
        System.out.println("Date is 2023-10-01");
    }
}

public class Main {
    public static void main(String[] args) {
        A obj = new A() {
            @Override
            public void displayDate() {
                System.out.println("Overridden date is 2023-10-02");
            }
        };

        obj.displayName();
        obj.displayDate();
    }
}