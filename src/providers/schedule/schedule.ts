import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { UtilityProvider } from '../../providers/utility/utility';
import { AuthProvider } from '../../providers/auth/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the ScheduleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ScheduleProvider {
  private scheduleRef: FirebaseListObservable<any[]>;
  scheduleData: any;  
  returnObj = [];    
  constructor(public http: Http,
    public afAuth: AngularFireAuth,
    public localstore: LocalstorageProvider,
    public utility: UtilityProvider,
    public af:AuthProvider,
    public db: AngularFireDatabase) {
    this.scheduleRef = db.list('/userProfile/schedule/');
    this.scheduleRef.subscribe(data => {
      this.scheduleData = data;
      console.log('key ', data);      
    });
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

  listSchedules = function (): any {
    var dataobj: any;
    var name: string = this.af.getCurrentUserName();
    if (this.scheduleData !== undefined) {
      dataobj = this.scheduleData.find(c => c.name === name);
      console.log('key ', dataobj);
      if (dataobj !== undefined) {
        this.returnObj.push(dataobj);
        return this.returnObj;
      } else {
        return null;
      }
    } else {
      return null;
    }




   
  }

  updateSchedule(schedule) {
    const scheduleObservable = this.db.object('/userProfile/schedule');
    var name: string = this.af.getCurrentUserName();    
    var Key = firebase.database().ref().child('/userProfile/schedule').push().key;
    
    this.scheduleRef.update(Key, {
      name: name,
      speciality: schedule.speciality,
      doctorName: schedule.doctorName.trim(),
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
