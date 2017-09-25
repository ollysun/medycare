import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { UtilityProvider } from '../../providers/utility/utility';
import { AuthProvider } from '../../providers/auth/auth';
//import * as firebase from 'firebase/app';

/*
  Generated class for the ScheduleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ScheduleProvider {
  private scheduleRef: FirebaseListObservable<any[]>;
  private scheduleObj: FirebaseObjectObservable<any>;
  name: string;
  public scheduleData = [];
  returnObj = [];
  constructor(public http: Http,
    public afAuth: AngularFireAuth,
    public localstore: LocalstorageProvider,
    public utility: UtilityProvider,
    public af: AuthProvider,
    public db: AngularFireDatabase) {
    this.scheduleObj = db.object('/userProfile/schedule', { preserveSnapshot: true });
    this.scheduleRef = db.list('/userProfile/schedule');
    this.name = this.af.getCurrentUserName();
    this.scheduleRef.subscribe(data => {
      data.forEach(item => {
        if (item.doctorName === this.name) {
          this.scheduleData.push(item);
        }
      });
    });
    console.log('schedule ', this.scheduleData);
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
    this.name = this.af.getCurrentUserName();
    this.scheduleRef.push({
      patientName: this.name,
      specialty: scheduleModel.specialty,
      doctorName: scheduleModel.doctorName,
      symptoms: scheduleModel.symptoms,
      dateCreated: scheduleModel.dateCreated,
      comment: scheduleModel.comment
    }).then((user) => {
      this.utility.presentAlert('Schedule', 'Schedule Successfully Created');
    }, (error) => {
      var errorMessage: string = error.message;
      this.utility.presentAlert('Schedule Error', errorMessage);
    });
  }

  listSchedules = function (): any[] {
    var dataobj: any;
    //var name: string = this.af.getCurrentUserName();
    if (this.scheduleData !== undefined) {
      // dataobj = this.scheduleData.find(c => c.doctorName === name);
      // if (dataobj !== undefined) {
      //   this.returnObj.push(dataobj);
      //   return this.returnObj;
      // } else {
      //   return null;
      // }
      return this.scheduleData;
    } else {
      return null;
    }
  }

  updateSchedule(schedule) {
    this.scheduleObj.update({
      patientName: this.name,
      specialty: schedule.specialty,
      doctorName: schedule.doctorName.trim(),
      symptoms: schedule.symptoms,
      comment: schedule.comment
    }).then((user) => {
      this.utility.presentAlert('Schedule', 'Schedule Successfully Updated');
    }, (error) => {
      var errorMessage: string = error.message;
      this.utility.presentAlert('Schedule', errorMessage);
    });
  }



}
