package MultiThreading;

import java.util.Random;

public class MultithreadedVaultApplication {
	protected final static int MAX_PASSWORD = 9999;
	
	public static void main(String[] args) {
		Random random = new Random();
		Vault vault = new Vault(random.nextInt(MAX_PASSWORD));
		
		Police police = new Police();
		Thief ascendingThief = new AscendingThief(vault);
		Thief descendingThief = new DescendingThief(vault);
		
		police.start();
		ascendingThief.start();
		descendingThief.start();
	}
	
	private static class Vault {
		private int password;
		
		public Vault(int password) {
			this.password = password;
		}
		
		public boolean isCorrectPassword(int guess) {
			try {
				Thread.sleep(5);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return guess == password;
		}
	}
	
	public static class Police extends Thread {
		public void run() {
			for(int i=0; i<=10; i++) {
				System.out.println("Countdown: " + i);
				try {
					this.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
			System.out.println("Police has arrived!!");
			System.exit(0);
		}
	}
	
	public static class AscendingThief extends Thief {
		
		public AscendingThief(Vault vault) {
			super(vault);
		}
		
		@Override
		public void run() {
			for(int i=0; i<=MAX_PASSWORD; i++) {
				if(vault.isCorrectPassword(i)) {
					System.out.println("Ascending Thief cracked the password - " + i);
					System.exit(1);
				}
			}
		}
		
	}
	
	public static class DescendingThief extends Thief {
		
		public DescendingThief(Vault vault) {
			super(vault);
		}

		@Override
		public void run() {
			for(int i=MAX_PASSWORD; i>=0; i--) {
				if(vault.isCorrectPassword(i)) {
					System.out.println("Descending Thief cracked the password - " + i);
					System.exit(1);
				}
			}
		}
		
	}
	
	public static abstract class Thief extends Thread {
		protected Vault vault;
		
		public Thief(Vault vault) {
			this.vault = vault;
			this.setName(this.getClass().getSimpleName());
			this.setPriority(MAX_PRIORITY);
		}
		
		public void start() {
			System.out.println("Starting thread - " + this.getName());
			super.start();
		}
	}
}
