package builderpattern;

public class Vehicle {
	private int year;	// Required
	private String make;	// Required
	
	private int hp;	// Optional
	private int wheels;	// Optional
	private int seats;	// Optional
	
	private Vehicle(Builder builder) {
		this.year = builder.year;
		this.make = builder.make;
		this.hp = builder.hp;
		this.wheels = builder.wheels;
		this.seats = builder.seats;
	}
	
	public static class Builder {
		private int year;	// Required
		private String make;	// Required
		
		private int hp;	// Optional
		private int wheels;	// Optional
		private int seats;	// Optional
		
		public Builder(int year, String make) {
			this.year = year;
			this.make = make;
		}
		
		public Builder hp(int val) {
			this.hp = val;
			return this;
		}
		
		public Builder wheels(int val) {
			this.wheels = val;
			return this;
		}
		
		public Builder seats(int val) {
			this.seats = val;
			return this;
		}
		
		public Vehicle build() {
			return new Vehicle(this);
		}
	}

	@Override
	public String toString() {
		return "Vehicle [year=" + year + ", make=" + make + ", hp=" + hp + ", wheels=" + wheels + ", seats=" + seats
				+ "]";
	}
	
	
	
}
