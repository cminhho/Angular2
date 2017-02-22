import { Component } 		from '@angular/core';
import { ActivatedRoute } 	from '@angular/router';

@Component({
	moduleId: module.id,
	templateUrl: './news.component.html'
})

export class NewsComponent{

	id1: number;
	id2: string;
	
	constructor(private activatedRoute: ActivatedRoute){
		let params : any = this.activatedRoute.snapshot.params;
		this.id1 = params.id1;
		this.id2 = params.id2;
	}
	
	
}