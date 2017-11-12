import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { ViewController, AlertController } from 'ionic-angular';
import { ScheduleFormPage } from '../schedule-form/schedule-form';
import { Storage } from '@ionic/storage';
import { Schedule } from '../../models/schedule';
import { ScheduleProvider } from '../../providers/schedule/schedule';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage implements OnInit {
  index: number;
  userName: string;
  public schedule: Schedule[] = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController, public storage: Storage, public scheduleProvider: ScheduleProvider) { }
  ngOnInit() {
    this.loadData();
  }

  doRefresh(refresher) {
    this.schedule = [];
    this.loadData();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  sendSchedule() {
    this.scheduleProvider
      .sendSchedule(this.schedule)
      .subscribe(data => console.log(data));
  }

  loadData() {
    this.storage.get('index')
      .then((val) => {
        if (val == null || val == undefined) {
          this.storage.set('index', 0);
          this.index = 0;
        } else {
          this.index = val;
        }
      });
    this.storage.get('schedule0').then((data) => {
      if (data != null && data != undefined) this.schedule.push(data);
      var result = this.OrderByArray(this.schedule, 'hour').map(d => { return d; });
      this.schedule = result;
      let i: number = 1;
      for (let entry of this.schedule) {
        entry.id = i;
        i++;
      }
    });
    this.storage.get('schedule1').then((data) => {
      if (data != null && data != undefined) this.schedule.push(data);
      var result = this.OrderByArray(this.schedule, 'hour').map(d => { return d; });
      this.schedule = result;
      let i: number = 1;
      for (let entry of this.schedule) {
        entry.id = i;
        i++;
      }
    });
    this.storage.get('schedule2').then((data) => {
      if (data != null && data != undefined) this.schedule.push(data);
      var result = this.OrderByArray(this.schedule, 'hour').map(d => { return d; });
      this.schedule = result;
      let i: number = 1;
      for (let entry of this.schedule) {
        entry.id = i;
        i++;
      }
    });
    this.storage.get('schedule3').then((data) => {
      if (data != null && data != undefined) this.schedule.push(data);
      var result = this.OrderByArray(this.schedule, 'hour').map(d => { return d; });
      this.schedule = result;
      let i: number = 1;
      for (let entry of this.schedule) {
        entry.id = i;
        i++;
      }
    });

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Creating time and ration...",
      duration: 500
    });
    loader.present();
  }

  DeleteSchedule() {
    this.storage.set('schedule0', null);
    this.storage.set('schedule1', null);
    this.storage.set('schedule2', null);
    this.storage.set('schedule3', null);
    this.storage.get('index').then(val => this.storage.set('index', 0));
    this.index = 0;
    this.schedule = [];
  }

  OrderByArray(values: any[], orderType: any) {
    return values.sort((a, b) => {
      var l = new Date('1970/01/01 ' + a[orderType])
      var r = new Date('1970/01/01 ' + b[orderType])
      if (l < r) {
        return -1;
      }

      if (l > r) {
        return 1;
      }
      return 0
    });
  }

  openModal() {
    let myModal = this.modalCtrl.create(ScheduleFormPage);
    myModal.onDidDismiss(data => {
      this.storage.get('index')
        .then((val) => {
          if (val <= 3 && val != null) {
            if (data['ration'] == undefined || data['ration'] == NaN) {
              data['ration'] = 0.5;
              this.storage.set('schedule' + val, data);
            } else {
              data['ration'] = data['ration'] / 2;
              this.storage.set('schedule' + val, data);
            }
            this.storage.set('index', ++val);
            this.index = val;
            this.schedule.push({ id: val, hour: data['hour'], ration: data['ration'] });
          }
          this.presentLoading();
        }).catch(error => console.log(error))
    });
    myModal.present();
  }
}
