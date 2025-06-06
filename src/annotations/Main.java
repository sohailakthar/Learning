package annotations;

public class Main {

    public class A {
        public void callMe() {
            System.out.println("A's callMe method");
        }
    }

    public class B extends A {
        // This override annotation shows that there's an issue while overriding CallMe method (callMe vs callME)
        @Override
        public void callME() {
            System.out.println("B's callMe method");
        }
    }

    public static void main(String[] args) {
        B ob = new Main().new B();
        ob.callMe();
    }
}
