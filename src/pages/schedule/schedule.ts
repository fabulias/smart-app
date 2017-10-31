import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  public event = {
    timeStarts1: '00:00',
    timeStarts2: '00:00',
    timeStarts3: '00:00',
    timeStarts4: '00:00',
  }
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Espere un momento por favor...",
      duration: 3000
    });
    loader.present();
  }
}
