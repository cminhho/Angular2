import { Component } from '@angular/core';

import { Product } from './_models/product'

// @Component annotation 
@Component ({
	moduleId: module.id,
	selector: 'app', // specific selector for HTML element named 'app'
	templateUrl: 'app.component.html'
})

export class AppComponent {
	app: string = 'App Component!';
	
	clickedItem: string;
	fullName: string = 'abc';
	phoneNumber: number;
	active: boolean;
	selectedItem: string;
	product: Product;
	products: Product[];
	result: string = 'User Input from $event Object';
	
	constructor(){
		this.clickedItem = 'App Component!';
		this.fullName = 'Chung Ho';
		this.phoneNumber = 0906246489;
		this.active = true;
		this.selectedItem = 'Binding User Input';
		
		this.product = {id: 'p01', name: 'Product 1', price: 10};
		this.products = [
			{id: 'p01', name: 'Product 1', price: 10},
			{id: 'p02', name: 'Product 2', price: 11},
			{id: 'p03', name: 'Product 3', price: 12}
		]
	}
	
	onClick(){
		this.clickedItem = 'Clicked!'
	}
	
	clickMe(event: any): void {
		alert('Click me!');
	}
	
	onItemClicked(product: Product): void{
		this.app = product.name;
	}
	
	display1(): string{
		return 'Display 1';
	}
	
	display2(fullName: string): string{
		return 'Hi ' + fullName;
	}
	
	display3(event: any): void{
		this.result = event.target.value;
	}
}