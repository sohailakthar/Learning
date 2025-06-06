package Interfaces.example1;

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
