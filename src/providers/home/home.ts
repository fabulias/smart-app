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
  url = 'http://farid.docencia.me/';
  constructor(public http: Http) {

  }
  state(): Observable<boolean> {
    return this.http.get(this.url)
      .map((res: Response) => { return res.status == 200 ? true : false })
      .catch((error: any) => Observable.of(false));
  }
  set_state(state: boolean): Observable<boolean> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ 'headers': headers });
    let body = JSON.stringify({ state: state })
    return this.http.post(this.url, body, options)
      .map((res: Response) => { return res.status == 200 ? true : false })
      .catch((error: any) => Observable.of(false));
  }
}
