import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScheduleProvider } from "../../providers/schedule/schedule";
import { ScheduleDetailsPage } from '../schedule-details/schedule-details';
/**
 * Generated class for the ProviderSchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-provider-schedule',
  templateUrl: 'provider-schedule.html',
})
export class ProviderSchedulePage {
  public schedules:any[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public schedule:ScheduleProvider) {
        this.getSchedules();
  }

  getSchedules = function ()
  {
    this.schedules = this.schedule.listSchedules();
  }

  itemTapped(event, schedule) {
    this.navCtrl.push(ScheduleDetailsPage, {
      schedule: schedule
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderSchedulePage');
  }

}
