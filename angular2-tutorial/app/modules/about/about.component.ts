import { Component } from '@angular/core';
import { Service1 }  from '../../_services/service1.service'

@Component({
	moduleId: module.id,
	templateUrl: './about.component.html'
})

export class AboutComponent{
	result: string;
	
	constructor(private service1: Service1){
		this.result = service1.work1();
	}
}