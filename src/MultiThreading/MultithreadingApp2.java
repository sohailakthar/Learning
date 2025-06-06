package MultiThreading;

import java.util.Random;

public class MultithreadingApp2 {
	protected static final int MAX_PASSWORD = 9999;
	
	public static void main(String[] args) {
		Random random = new Random();
		Vault vault = new Vault(random.nextInt(MAX_PASSWORD));
		
		Police police = new Police();
		HackerThread ascendingHacker = new AscendingHacker(vault);
		HackerThread descendingHacker = new DescendingHacker(vault);
		
		police.start();
		ascendingHacker.start();
		descendingHacker.start();
	}
	
	public static class Police extends Thread {
		public void run() {
			System.out.println("Countdown begins.");
			for(int i=1; i<=10; i++) {
				System.out.println(i);
				try {
					this.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
			
			System.exit(0);
		}
	}
	public static class Vault {
		private int password;
		
		public Vault(int password) {
			this.password = password;
		}
		
		public boolean isCorrectPassword(int guess) {
			return guess == password;
		}
	}
	
	public static class AscendingHacker extends HackerThread {
		public AscendingHacker(Vault vault) {
			super(vault);
		}
		
		public void run() {
			for(int i=0; i<=MAX_PASSWORD; i++) {
				try {
					this.sleep(5);
					if(vault.isCorrectPassword(i)) {
						System.out.println("AscendingHacker cracked the password: " + i);
						System.exit(0);
					}
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}
	}
	
	public static class DescendingHacker extends HackerThread {
		public DescendingHacker(Vault vault) {
			super(vault);
		}
		
		public void run() {
			for(int i=MAX_PASSWORD; i>=0; i--) {
				try {
					this.sleep(5);
					if(vault.isCorrectPassword(i)) {
						System.out.println("DescendingHacker cracked the password: " + i);
						System.exit(0);
					}
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}
	}
	
	protected static abstract class HackerThread extends Thread {
		Vault vault;
		
		public HackerThread(Vault vault) {
			this.vault = vault;
			this.setName(this.getClass().getSimpleName());
			this.setPriority(MAX_PRIORITY);
		}
		
		public void start() {
			System.out.println("Starting thread-" + this.getName());
			super.start();
		}
	}
}
