package MultiThreading;

class A implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("hi");
        }
    }
}

class B implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("hello");
        }
    }
}

public class ThreadUsingRunnable {
    public static void main(String[] args) {
        A a = new A();
        B b = new B();

        Thread threadA = new Thread(a);
        Thread threadB = new Thread(b);

        threadA.start();
        threadB.start();
    }
}
