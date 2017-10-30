import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToSchedule(params){
    if (!params) params = {};
    this.navCtrl.push(SchedulePage);
  }
}
