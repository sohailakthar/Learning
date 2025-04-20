package factorydesignpattern;

public enum EngineType {
	CAR {
		public Vehicle getVehicle() {
			return new Car();
		}
	}, TRUCK {
		public Vehicle getVehicle() {
			return new Truck();
		}
	}, ELECTRIC {
		public Vehicle getVehicle() {
			return new Electric();
		}
	};
	
	abstract Vehicle getVehicle();
}
