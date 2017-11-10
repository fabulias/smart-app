import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NgForm, FormGroup, FormArray, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ScheduleFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-form',
  templateUrl: 'schedule-form.html',
})
export class ScheduleFormPage {
  public invoiceForm: FormGroup

  public hour = "00:00";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public fb: FormBuilder, public storage: Storage) {
  }
  ngOnInit() {
  }

  sendData(f: NgForm) {
    let data = {
      'hour': f.value['hour'],
      'ration': f.value['quantity']
    };
    this.viewCtrl.dismiss(data);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
