import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ModalController, ViewController, AlertController } from 'ionic-angular';
import { SampleModalPage } from '../sample-modal/sample-modal'; //Example modal
import { ScheduleFormPage } from '../schedule-form/schedule-form';
import { Storage } from '@ionic/storage';
import { Schedule } from '../../models/schedule';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage implements OnInit {
  index: number;
  userName: string;
  public schedule: Schedule[] = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController, public storage: Storage) { }
  ngOnInit() {
    this.loadData();
  }

  doRefresh(refresher) {
    this.loadData();
    this.OrderByArray(this.schedule, 'hour')
      .map(data => {
        console.log(data);
        this.schedule = data;
      })
    setTimeout(() => {
      refresher.complete();
    }, 2000);
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
      console.log(this.OrderByArray(this.schedule, 'hour').map(d => d));
    });
    this.storage.get('schedule1').then((data) => {
      if (data != null && data != undefined) this.schedule.push(data);
      debugger;
      var a = [];
      this.OrderByArray(this.schedule, 'hour').map(d => a = d);
      debugger;
    });
    this.storage.get('schedule2').then((data) => {
      if (data != null && data != undefined) this.schedule.push(data);
      console.log(this.OrderByArray(this.schedule, 'hour').map(d => d));
      debugger;
    });
    this.storage.get('schedule3').then((data) => {
      if (data != null && data != undefined) this.schedule.push(data);
      console.log(this.OrderByArray(this.schedule, 'hour').map(d => d));
      debugger;
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
      if (new Date(a[orderType]) < new Date(b[orderType])) {
        return -1;
      }

      if (new Date(a[orderType]) > new Date(b[orderType])) {
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
            if (data['quantity'] == undefined || data['quantity'] == NaN) {
              data['quantity'] = 0.5;
              this.storage.set('schedule' + val, data);
            } else {
              data['quantity'] = data['quantity'] / 2;
              this.storage.set('schedule' + val, data);
            }
            this.storage.set('index', ++val);
            this.index = val;
            this.schedule.push({ hour: data['hour'], quantity: data['quantity'] });
          }
          this.presentLoading();
        }).catch(error => console.log(error))
    });
    myModal.present();
  }
}
