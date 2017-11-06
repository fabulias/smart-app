import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ModalController, ViewController, AlertController } from 'ionic-angular';
import { SampleModalPage } from '../sample-modal/sample-modal'; //Example modal
import { ScheduleFormPage} from '../schedule-form/schedule-form';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage implements OnInit {
  index:number;
  userName: string;
  schedule: Object[] = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
              public modalCtrl: ModalController, public storage: Storage) {
    this.storage.get('index')
    .then((val) => {
      if (val == null) 
        this.storage.set('index', 0);
    });

    this.schedule[0] = {"hour": "", "quantity":0};
    this.schedule[1] = {"hour": "", "quantity":0};
    this.schedule[2] = {"hour": "", "quantity":0};
    this.schedule[3] = {"hour": "", "quantity":0};
  }

  ngOnInit() {

    this.storage.get('hour1')
    .then((val) => {
      if (val == null || val == undefined) 
        this.schedule[0] = { "hour": ""};
      else 
        this.schedule[0] = { "hour": val};
    })

    this.storage.get('ration1')
    .then((val) => {
      if (val == null || val == undefined) 
        this.schedule[0] = { "hour": 0};
      else 
        this.schedule[0] = { "hour": val};
    })

    this.storage.get('hour2')
    .then((val) => {
      if (val == null || val == undefined) 
        this.schedule[1] = { "hour": ""};
      else 
        this.schedule[1] = { "hour": val};
    })

    this.storage.get('ration2')
    .then((val) => {
      if (val == null || val == undefined) 
        this.schedule[1] = { "ration": 0};
      else 
        this.schedule[1] = { "ration": val};
    })

    this.storage.get('hour3')
    .then((val) => {
      if (val == null || val == undefined) 
        this.schedule[2] = { "hour": ""};
      else 
        this.schedule[2] = { "hour": val};
    })

    this.storage.get('ration3')
    .then((val) => {
      if (val == null || val == undefined) 
        this.schedule[2] = { "ration": 0};
      else 
        this.schedule[2] = { "ration": val};
    })

    this.storage.get('hour4')
    .then((val) => {
      if (val == null || val == undefined) 
        this.schedule[3] = { "hour": ""};
      else 
        this.schedule[3] = { "hour": val};
    })

    this.storage.get('ration4')
    .then((val) => {
      if (val == null || val == undefined) 
        this.schedule[3] = { "ration": 0};
      else 
        this.schedule[3] = { "ration": val};
    })
    debugger;
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
          this.storage.set('hour'+val, data['hour']);
          if (data['quantity'] == undefined || data['quantity'] == NaN)
            this.storage.set('quantity'+val, 0);
          else 
            this.storage.set('quantity'+val, data['quantity']/2);
          this.storage.set('index', ++val);
          this.index = val;
        }
        this.presentLoading();
      }).catch(error => console.log(error))
    });
    myModal.present();
  }
}
