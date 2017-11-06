import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {
  url = 'https://a4c6ea47.ngrok.io/'; 
  constructor(public http: Http) {
    
  }
  state(): Observable<boolean> {
  		
      	return this.http.get(this.url)
      			.map((res: Response)=>{
      				if (res.status==200) {
      					return true 
      				}
      				else { 
      					return false
      				}
      			})
      			.catch((error : any ) => Observable.of(false));
  }
  set_state(state: boolean) : Observable<boolean> {
  	const headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	const options = new RequestOptions({ 'headers': headers });
  	let body = JSON.stringify({state: state})
  	console.log(body);
  	return this.http.post(this.url,body, options)
  			.map((res: Response)=>{
  				console.log("in map");
  				if (res.status==200) {
  					console.log("SERVER STATE CHANGE")
  					return true
  				}
  				else {
  					console.log("SOME ERROR ON SERVER")
  					return false
  				}

  		})
  		.catch((error: any) => Observable.of(false)); 
  }

}
