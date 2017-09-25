import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScheduleProvider } from "../../providers/schedule/schedule";
import { ProviderSchedulePage } from '../provider-schedule/provider-schedule';

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
  scheduleDetail = {
    patientName: '',
    specialty: '',
    doctorName: '',
    symptoms: '',
    comment: ''
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public schedule:ScheduleProvider) {
    this.scheduleDetail = navParams.get('schedule');
  }

  update()
  {
      this.schedule.updateSchedule(this.scheduleDetail);
      this.navCtrl.setRoot(ProviderSchedulePage);            
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleDetailsPage');
  }

}
