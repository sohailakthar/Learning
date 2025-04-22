package factorydesignpattern;

public class VehicleFactory {
	public Vehicle getVehicle(EngineType engine) {
		return engine.getVehicle();
	}
}
