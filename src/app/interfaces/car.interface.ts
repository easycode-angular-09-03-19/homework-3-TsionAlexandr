export interface Car {
	name: string;
	mileage: number;
	amountOfFuel: number;
	carInfo: string[];

	drive(distance: string): void;
	refuel(_addFuel: string): void;
}