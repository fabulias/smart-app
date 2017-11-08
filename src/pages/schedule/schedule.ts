import { Component, OnInit, OnChanges } from '@angular/core';
import { NavController, LoadingController, ModalController, ViewController, AlertController } from 'ionic-angular';
import { SampleModalPage } from '../sample-modal/sample-modal'; //Example modal
import { ScheduleFormPage } from '../schedule-form/schedule-form';
import { Storage } from '@ionic/storage';
import { Schedule } from '../../models/schedule';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage implements OnInit, OnChanges {
  index: number;
  userName: string;
  public schedule: Array<Schedule> = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController, public storage: Storage) {
    this.storage.get('index')
      .then((val) => {
        if (val == null || val == undefined)
          this.storage.set('index', 0);
        this.index = val;
      });
  }
  ngOnChanges() {
    let hour = "00:00";
    let ration = 0;
    this.storage.get('hour1')
      .then((val) => {
        if (val != null && val != undefined)
          hour = val;
      })

    this.storage.get('ration1')
      .then((val) => {
        if (val != null && val != undefined)
          ration = val;
      })

    this.schedule.push({ "hour": hour, "ration": ration })
    this.storage.get('hour2')
      .then((val) => {
        if (val != null && val != undefined)
          hour = val;
      })

    this.storage.get('ration2')
      .then((val) => {
        if (val != null && val != undefined)
          ration = val;
      })

    this.schedule.push({ "hour": hour, "ration": ration })

    this.storage.get('hour3')
      .then((val) => {
        if (val != null && val != undefined)
          hour = val;
      })

    this.storage.get('ration3')
      .then((val) => {
        if (val != null && val != undefined)
          ration = val;
      })

    this.schedule.push({ "hour": hour, "ration": ration })


    this.storage.get('hour4')
      .then((val) => {
        if (val != null && val != undefined)
          hour = val;
      })

    this.storage.get('ration4')
      .then((val) => {
        if (val != null && val != undefined)
          ration = val;
      })
  }
  ngOnInit() {
    let hour = "";
    let ration = 0;
    debugger;
    this.storage.get('hour1')
      .then((val) => {
        debugger;
        if (val != null && val != undefined)
          hour = val;
      })
      .catch(error => console.log(error))

    this.storage.get('ration1')
      .then((val) => {
        if (val != null && val != undefined)
          ration = val;
      })

    this.schedule.push({ "hour": hour, "ration": ration })
    debugger;
    this.storage.get('hour2')
      .then((val) => {
        if (val != null && val != undefined)
          hour = val;
      })

    this.storage.get('ration2')
      .then((val) => {
        if (val != null && val != undefined)
          ration = val;
      })

    this.schedule.push({ "hour": hour, "ration": ration })

    this.storage.get('hour3')
      .then((val) => {
        if (val != null && val != undefined)
          hour = val;
      })

    this.storage.get('ration3')
      .then((val) => {
        if (val != null && val != undefined)
          ration = val;
      })

    this.schedule.push({ "hour": hour, "ration": ration })

    this.storage.get('hour4')
      .then((val) => {
        if (val != null && val != undefined)
          hour = val;
      })

    this.storage.get('ration4')
      .then((val) => {
        if (val != null && val != undefined)
          ration = val;
      })

    this.schedule.push({ "hour": hour, "ration": ration })
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Creating time and ration...",
      duration: 500
    });
    loader.present();
  }


  openModal() {
    let myModal = this.modalCtrl.create(ScheduleFormPage);
    myModal.onDidDismiss(data => {
      this.storage.get('index')
        .then((val) => {
          if (val <= 3 && val != null) {
            this.storage.set('hour' + val, data['hour']);
            if (data['quantity'] == undefined || data['quantity'] == NaN)
              this.storage.set('quantity' + val, 0);
            else
              this.storage.set('quantity' + val, data['quantity'] / 2);
            this.storage.set('index', ++val);
            this.index = val;
          }
          this.presentLoading();
          this.navCtrl.push(SchedulePage);
        }).catch(error => console.log(error))
    });
    myModal.present();
  }
}
