package builderpattern;

public class User {
	public static void main(String[] args) {
		Vehicle lambo = new Vehicle.Builder(2022, "Lamborghini").build();
		Vehicle bmw = new Vehicle.Builder(2020, "BMW").seats(2).wheels(4).build();
		Vehicle volvoBus = new Vehicle.Builder(2023, "Volvo").seats(3).wheels(12).hp(5000).build();
		
		System.out.println(lambo.toString());
		System.out.println(bmw.toString());
		System.out.println(volvoBus.toString());
	}
}
