import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { HomeProvider } from '../../providers/home/home';

import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  serve_state: boolean;  //current state
  private toggleOnOff: boolean;
  constructor(public navCtrl: NavController, public homeProvider: HomeProvider,
    private toastCtrl: ToastController, private network: Network) {

  }
  ngOnInit() {
    if (<string>this.network.type == "none") {
      this.showToastWithCloseButton('middle', 'Revisa tu conexión a Internet')
    } else {
      this.homeProvider.state().subscribe(data => {
        if (data) {
          this.showToastWithCloseButton('middle', 'SmartFeedr encedido');
          this.toggleOnOff = true;
        }
        else {
          this.showToastWithCloseButton('middle', 'SmartFeedr apagado')
          this.toggleOnOff = false;
        }
      });
    }
  }

  onClick(event) {
    if (<string>this.network.type == "none") {
      this.showToastWithCloseButton('middle', 'Revisa tu conexión a Internet')
    } else {
      this.homeProvider.set_state(event.value).subscribe(data => {
        if (data == "on") {
          this.toggleOnOff = true;
          this.showToastWithCloseButton('middle', 'SmartFeedr encendido');
        } else if (data == "off") {
          this.toggleOnOff = false;
          this.showToastWithCloseButton('middle', 'SmartFeedr apagado');
        } else {
          this.showToastWithCloseButton('middle', 'Error en servidor');
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
