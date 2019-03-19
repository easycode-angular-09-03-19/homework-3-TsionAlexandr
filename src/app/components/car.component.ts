import { Component, } from '@angular/core';

import { Car } from '../interfaces/car.interface';
 

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements Car {

	public name:string = 'Lamborghini';
	public mileage: number = 4000;
	public amountOfFuel: number = 100;
	
	public carInfo: string[] = [
		'Цвет - оранжевый',
        'Максимальная скорость - 320 Км/ч',
        'Объем двигателя - 6 Литров',
        'Год выпуска - 2010'
	];
	
	protected _fuel: string;
	protected _distance: string;

	constructor() { }
	
	public drive(distance: string): void {

		let conventionalUnit: number = +distance;

		if (conventionalUnit > this.amountOfFuel) {
			this.mileage += this.amountOfFuel;
			this._distance = '';
		} else {
			this.mileage += conventionalUnit;
			this.amountOfFuel -= conventionalUnit;
			this._distance = '';
        }
	}

	public refuel(_addFuel: string): void {

        let reFuel = +this._fuel;
        
		this.amountOfFuel += reFuel;
		this._fuel = '';
	}
}

