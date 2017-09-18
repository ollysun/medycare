import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { UtilityProvider } from '../../providers/utility/utility';

/*
  Generated class for the ScheduleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ScheduleProvider {
  private providerRef: FirebaseListObservable<any[]>;
  private scheduleRef: FirebaseObjectObservable<any>;
  private name: string;
  constructor(public http: Http,
    public afAuth: AngularFireAuth,
    public localstore: LocalstorageProvider,
    public utility: UtilityProvider,
    public db: AngularFireDatabase) {
    this.name = localstore.getName();
    this.providerRef = db.list('/userProfile/provider');
    this.scheduleRef = db.object('/userProfile/patient/schedule/' + this.name);
  }

  getProviderName = function (specialty): string[] {
    let name: string[];
    this.providerRef.subscribe(data => {
      data.forEach(function (item) {
        if (item.specialty === specialty) {
          name.push[item.fullname];
        }
      });
    });
    return name;
  }

  schedule = function (scheduleModel) {
    this.scheduleRef.set({
      name: this.name,
      speciality: scheduleModel.speciality,
      doctorName: scheduleModel.doctorName,
      symptoms: scheduleModel.symptoms,
      dateCreated: scheduleModel.dateCreated,
      comment: scheduleModel.comment
    }).then((user) => {
      this.utility.presentAlert('Schedule', 'Schedule Successfully Created');
    }, (error) => {
      var errorMessage: string = error.message;
      this.utility.presentAlert('Schedule', errorMessage);
    });
  }

  listSchedules = function () {
    this.scheduleRef.subscribe(data => {
      return data;
    });
  }

  updateSchedule(schedule) {
    const scheduleObservable = this.db.object('/schedule/' + this.name);
    scheduleObservable.update({
      name: this.name,
      speciality: schedule.speciality,
      doctorName: schedule.doctorName,
      symptoms: schedule.symptoms,
      dateCreated: schedule.dateCreated,
      comment: schedule.comment
    }).then((user) => {
      this.utility.presentAlert('Schedule', 'Schedule Successfully Updated');
    }, (error) => {
      var errorMessage: string = error.message;
      this.utility.presentAlert('Schedule', errorMessage);
    });
  }



}
