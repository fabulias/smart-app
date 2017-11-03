import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { HomeProvider } from '../../providers/home/home';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  serve_state:boolean;  //current state

  constructor(public navCtrl: NavController, public homeProvider: HomeProvider) {
  	
  }
  ngOnInit(){
  	this.homeProvider.state().subscribe(data=>{
  		this.serve_state=data;
      console.log(this.serve_state);
  	})

  	
  	//Aquí quedamos, ahora se debería revisar el estado del servidor mediante el metodo server_state() que retornará true o false. 
  }
  onClick(event){
    if (event.value!=this.serve_state){
      this.serve_state=event.value;
      this.homeProvider.set_state(this.serve_state).subscribe(
      data=> console.log(data));
    }
    
  }

  goToSchedule(params) {
    if (!params) params = {};
    this.navCtrl.push(SchedulePage);
  }
}
