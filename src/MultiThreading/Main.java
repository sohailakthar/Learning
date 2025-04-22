package MultiThreading;

public class Main {
	public static void main(String[] args) throws InterruptedException {
		Thread thread = new Thread(() -> {
			System.out.println("Inside thread: " + Thread.currentThread().getName() + " and Priority: " + Thread.currentThread().getPriority());
		});
		
		thread.setName("Worker Thread");
		thread.setPriority(10);
		
		System.out.println("Before starting worker thread: " + Thread.currentThread().getName());
		thread.start();
		System.out.println("After starting worker thread: " + Thread.currentThread().getName());
		
		Thread misbehavingThread = new Thread(() -> {
			throw new RuntimeException("An exception occured.");
		});
		
		misbehavingThread.setName("Misbehaving_Thread");
		
		misbehavingThread.setUncaughtExceptionHandler(new Thread.UncaughtExceptionHandler() {
			@Override
			public void uncaughtException(Thread t, Throwable e) {
				System.out.println("A critical exception occured in : " + Thread.currentThread().getName() + " The error is: " + e.getMessage());
			}
		});
		

		misbehavingThread.start();
		
		
	}
}
