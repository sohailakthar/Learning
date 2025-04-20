package Interfaces;

public class Tiger extends Animal implements Jumpable {

	@Override
	public void jump() {
		System.out.println("Jumping...");
	}

	@Override
	public void sound() {
		System.out.println("Rawrrr...");
	}

}
