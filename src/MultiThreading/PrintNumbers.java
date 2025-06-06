package MultiThreading;

class A extends Thread {
    public void run() {
        for (int i = 1; i <= 10; i++) {
            System.out.println("Thread A: " + i);
        }
    }
}

class B extends Thread {
    public void run() {
        for (int i = 1; i <= 10; i++) {
            System.out.println("Thread B: " + i);
        }
    }
}

public class PrintNumbers {
    public static void main(String[] args) {
        System.out.println("Main thread started");

        A threadA = new A();
        B threadB = new B();

        threadA.start();
        threadB.start();
    }
}
