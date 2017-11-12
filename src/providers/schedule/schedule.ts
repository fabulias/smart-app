import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';
import { Schedule, scheduleService } from '../../models/schedule';
/*
  Generated class for the ScheduleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScheduleProvider {
  url = 'http://localhost:9002/information';
  constructor(public http: Http, public storage: Storage) {

  }
  sendSchedule(data: Schedule[]): Observable<boolean> {
    let schedule_: scheduleService = new scheduleService();
    schedule_.ration1 = data[0].ration;
    schedule_.date1 = data[0].hour;
    let size = data.length;
    --size;
    if (size > 0) {
      schedule_.ration2 = data[1].ration;
      schedule_.date2 = data[1].hour;
      --size;
    }
    if (size > 0) {
      schedule_.ration3 = data[2].ration;
      schedule_.date3 = data[2].hour;
      --size;
    }
    if (size > 0) {
      schedule_.ration4 = data[3].ration;
      schedule_.date4 = data[3].hour;
      --size;
    }
    debugger;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ 'headers': headers });
    let body = JSON.stringify({ data: data })
    return this.http.post(this.url, body, options)
      .map((res: Response) => { return res.status == 200 ? true : false })
      .catch((error: any) => Observable.of(false));
  }
}
