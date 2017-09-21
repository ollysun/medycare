import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScheduleDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-schedule-details',
  templateUrl: 'schedule-details.html',
})
export class ScheduleDetailsPage {
  scheduleDetails = {
    name: '',
    speciality: '',
    doctorName: '',
    symptoms: '',
    dateCreated: '',
    comment: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.scheduleDetails = navParams.get('schedule');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleDetailsPage');
  }

}
