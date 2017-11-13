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
  private toggleOnOff: boolean;
  constructor(public navCtrl: NavController, public homeProvider: HomeProvider, private toastCtrl: ToastController) {

  }
  ngOnInit() {
    this.homeProvider.state().subscribe(data => {
      if (data) {
        this.showToastWithCloseButton('middle', 'SmartFeeder encedido');
        this.toggleOnOff = true;
      }
      else {
        this.showToastWithCloseButton('middle', 'SmartFeeder apagado')
        this.toggleOnOff = false;
      }
    });
  }

  onClick(event) {
    this.homeProvider.set_state(this.serve_state).subscribe(data => {
      if (data == "on") {
        this.toggleOnOff = true;
        this.showToastWithCloseButton('middle', 'SmartFeeder encedido');
      } if (data == "off") {
        this.toggleOnOff = false;
        this.showToastWithCloseButton('middle', 'SmartFeeder apagado');
      } else {
        this.showToastWithCloseButton('middle', 'Error en servidor');
      }
    });
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
