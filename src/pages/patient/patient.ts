import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Patient } from '../../Model/Patient';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

/**
 * Generated class for the PatientPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
  providers: [Patient]
})
export class PatientPage {

  patient: any;
  confirmPassword: string;
  patientList: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public model: Patient,
    db: AngularFireDatabase) {
    this.patient = model;
    this.patientList = db.list('/patients');
  }
  //model = new Patient();
  countries:string[] = [
          'Nigeria', 'Ghana'
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientPage');
  }

  signUp() {
    this.patientList.push({
      fullname: this.patient.fullname,
      username: this.patient.username,
      email: this.patient.email,
      password: this.patient.password,
      address: this.patient.address,
      phoneNumber: this.patient.phoneNumber,
      gender: this.patient.gender,
      country: this.patient.country,
      state: this.patient.state,
      dateOfBirth: this.patient.dateOfBirth
    }).then(newPatient => {
      console.log(newPatient);
    }, error => {
      console.log(error);
    });

  }

}
