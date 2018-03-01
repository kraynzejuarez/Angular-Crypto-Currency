import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{

	result:any;
	
	constructor(private _http: Http){ }

	getProject() {
	return thid._http.get('')\
		.map(result => this.result.json() )

	}
}