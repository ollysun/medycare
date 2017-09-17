import { Component } from '@angular/core';
import { IonicPage, NavController,
  LoadingController, 
  Loading, 
  AlertController, NavParams } from 'ionic-angular';
import { Patient } from '../../Model/Patient';
import { AuthProvider } from '../../providers/auth/auth';
import {
  AngularFireDatabase,
  FirebaseListObservable,
} from 'angularfire2/database';
import { HomePatientPage } from '../home-patient/home-patient';

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
  authuser:any;
  public loading:Loading;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public model: Patient,
    db: AngularFireDatabase,
    public authData: AuthProvider,
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController) {
    this.patient = model;
    this.patientList = db.list('/patients');
  }
  //model = new Patient();
  bloodTypes:string[] = [
          'A+', 'B+', 'OO',
          'AB+'
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientPage');
  }

  signUp()
  {
      this.authData.createPatientUser(this.patient)
      .then((success) => {
        this.navCtrl.setRoot(HomePatientPage);
      }, (error) => {
        this.loading.dismiss().then( () => {
          var errorMessage: string = error.message;
            let alert = this.alertCtrl.create({
              message: errorMessage,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
  }
  // signUp() {
  //   this.registerAuthUser()
  //   this.patientList.push({
  //     fullname: this.patient.fullname,
  //     email: this.patient.email,
  //     password: this.patient.password,
  //     address: this.patient.address,
  //     phoneNumber: this.patient.phoneNumber,
  //     gender: this.patient.gender,
  //     bloodType: this.patient.bloodType,
  //     weight: this.patient.weight,
  //     height: this.patient.height,
  //     dateOfBirth: this.patient.dateOfBirth
  //   }).then(newPatient => {
  //     console.log(newPatient);
  //   }, error => {
  //     console.log(error);
  //   });

  // }

}
