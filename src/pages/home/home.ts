import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { HomeProvider } from '../../providers/home/home';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  serve_state: boolean;  //current state

  constructor(public navCtrl: NavController, public homeProvider: HomeProvider, private toastCtrl: ToastController) {

  }
  ngOnInit() {
    this.homeProvider.state().subscribe(data => {
      this.serve_state = data;
    });
  }

  onClick(event) {
    if (event.value != this.serve_state) {
      this.serve_state = event.value;
      this.homeProvider.set_state(this.serve_state).subscribe(data => {
        if (this.serve_state) {
          this.showToastWithCloseButton('middle', 'SmartFeeder encedido')
        } else {
          this.showToastWithCloseButton('middle', 'SmartFeeder apagado')
        }
      });
    }
  }

  showToastWithCloseButton(positionString: string, msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: positionString,
      cssClass: "home.scss"
    });
    toast.present();
  }

  goToSchedule(params) {
    if (!params) params = {};
    this.navCtrl.push(SchedulePage);
  }
}
