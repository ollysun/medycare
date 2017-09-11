import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the SchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  public scheduleForm: FormGroup;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.scheduleForm = formBuilder.group({
      speciality: [''],
      doctorName:[],
      symptoms:[]
    })   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}
