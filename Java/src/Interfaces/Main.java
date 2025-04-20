package Interfaces;

public class Main {
	// Abstract class: Common feature and with slightly different implementation (walk, eat, sound)
	// Interfaces: Only when required (fly, jump)
	
	public static void main(String[] args) {
		Sparrow sparrow = new Sparrow();
		Eagle eagle = new Eagle();
		Tiger tiger = new Tiger();
		
		sparrow.fly();
		eagle.sound();
		tiger.jump();
		tiger.sound();
	}
	
}
