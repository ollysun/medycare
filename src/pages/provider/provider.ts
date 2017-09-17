import { Component } from '@angular/core';
import { IonicPage, NavController,
  LoadingController, 
  Loading, 
  AlertController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Provider } from '../../Model/Provider';
import { AuthProvider } from '../../providers/auth/auth';
import { HomeProviderPage } from '../home-provider/home-provider';
/**
 * Generated class for the ProviderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-provider',
  templateUrl: 'provider.html',
  providers: [Provider]
})
export class ProviderPage {
  provider: any;
  specialities:string[];
  states = [];
  providerList: FirebaseListObservable<any[]>;
  public loading:Loading;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    model: Provider,
    db: AngularFireDatabase,
    public authData: AuthProvider,
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController) {
    this.provider = model;
    this.specialities = [
      'Medical doctor',
      'Surgical Technologist',
      'Pharmacist',
      'Dentist',
      'Cardiology',
      'Nurse',
      'Physician Assistant',
      'Registered  Pharmacist (RPh)',
      'Registered  Dietitian (RD)',
      'Respiratory therapist (RT)',
      'Physical therapist (PT)',
      'Occupational therapist (OT)',
      'Speech therapist',
      'Audiologist',
      'Clinical Psychologist'
    ];
  }

  signUp()
  {
      this.authData.createProviderUser(this.provider)
      .then((success) => {
        this.navCtrl.setRoot(HomeProviderPage);
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
  //   this.registerAuthUser();
  //   this.providerList.push({
  //     title: this.provider.title,
  //     fullname: this.provider.fullname,
  //     username: this.provider.username,
  //     email: this.provider.email,
  //     password: this.provider.password,
  //     address: this.provider.address,
  //     phoneNumber: this.provider.phoneNo,
  //     clinic: this.provider.clinic,
  //     specialty: this.provider.specialty
  //   }).then(newProvider => {
  //     console.log(newProvider);
  //   }, error => {
  //     console.log(error);
  //   });
  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderPage');
  }

}
