package lambdaexpression;

public class Main {
    public static void main(String[] args) {
        // Functional interface is an interface with a single abstract method.

        // Implemented using an anonymous class
        MyFuncInterface myFunc1 = new MyFuncInterface() {
            @Override
            public void greeting(String name) {
                System.out.println("Hello, " + name + "!");
            }
        };

        // Implemented using a lambda expression
        MyFuncInterface myFunc2 = (name) -> System.out.println("Hello, " + name + "!");

        myFunc1.greeting("Alice");
        myFunc2.greeting("Bob");
    }
}
