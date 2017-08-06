import { Component } from '@angular/core';
import { IonicPage, NavController,
  LoadingController, 
  Loading, 
  AlertController, NavParams } from 'ionic-angular';
import { Patient } from '../../Model/Patient';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import {
  AngularFireDatabase,
  FirebaseListObservable,
} from 'angularfire2/database';
//import { DiagonisePage } from '../diagonise/diagonise';

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
    af: AngularFireAuth,
    public authData: AuthProvider,
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController) {
    this.patient = model;
    this.patientList = db.list('/patients');
    this.authuser = af;
  }
  //model = new Patient();
  countries:string[] = [
          'Nigeria', 'Ghana'
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientPage');
  }

  registerAuthUser()
  {
      this.authData.signupUser(this.patient.email,
        this.patient.password)
      .then((success) => {
        //this.nav.setRoot(DiagonisePage);
        console.log(success);
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
  signUp() {
    this.registerAuthUser()
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
