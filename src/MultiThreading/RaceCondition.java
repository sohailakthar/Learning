package MultiThreading;

class Modify {
    int counter = 0;

    public synchronized void increment() {
        counter++;
    }
}

public class RaceCondition {
    public static void main(String[] args) throws InterruptedException {
        Modify obj = new Modify();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                obj.increment();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                obj.increment();
            }
        });

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println(obj.counter);
    }
}
