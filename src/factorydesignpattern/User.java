package factorydesignpattern;

public class User {
	public static void main(String[] args) {
		VehicleFactory vf = new VehicleFactory();
		
		Vehicle car = vf.getVehicle(EngineType.CAR);
		Vehicle truck = vf.getVehicle(EngineType.TRUCK);
		Vehicle electric = vf.getVehicle(EngineType.ELECTRIC);
		
		car.startEngine();
		truck.startEngine();
		electric.startEngine();
	}
}
