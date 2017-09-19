import { Component } from '@angular/core';
import { RegisterPage } from '../register/register';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { HomePatientPage } from '../home-patient/home-patient';
import { HomeProviderPage } from '../home-provider/home-provider';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
import {
  IonicPage, NavController,
  LoadingController,
  Loading,
  AlertController, NavParams
} from 'ionic-angular';
import { UtilityProvider } from '../../providers/utility/utility';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userList: FirebaseListObservable<any[]>;
  public loading: Loading;
  user: any = { email: '', password: '' };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    db: AngularFireDatabase,
    public authData: AuthProvider,
    public loadingCtrl: LoadingController,
    public localstorage: LocalstorageProvider,
    public utility: UtilityProvider,
    public alertCtrl: AlertController) {
  }

  login() {
    console.log(this.user);
    console.log(this.user.email);
    //this.openPage();
    // if (this.user.email === "ollysun@gmail.com") {
    //   this.navCtrl.setRoot(HomePatientPage);
    // }
    this.authData.loginUser(this.user.email, this.user.password)
      .then(authData => {
        this.openPage();
      }, error => {
        var message = error.message;
        this.utility.presentAlert('login error', message);
      });
  }

  checkPatientName = function (email): string {
    let patientName = this.authData.getPatientName(this.user.email);
    if (patientName !== null) {
      return patientName;
    } else {
      return null;
    }
  }

  checkProviderName = function (email) {
    let providerName = this.authData.getProviderName(this.user.email);
    if (providerName !== null) {
      return providerName;
    } else {
      return null;
    }
  }

  goTo(page) {
    if (page === 'register') {
      this.navCtrl.push(RegisterPage);
    } else if (page === 'resetPassword') {
      this.navCtrl.push(ResetPasswordPage);
    }
  }

  back() {
    if (this.navCtrl.length() >= 2) {
      this.navCtrl.pop();
    }
  }

  openPage = function () {
    this.localstorage.setEmail(this.user.email);
    const patientName = this.checkPatientName(this.user.email);
    const providerName = this.checkProviderName(this.user.email);
    if (patientName !== null) {
      this.localstorage.setName(patientName); 
      this.navCtrl.setRoot(HomePatientPage);
    } else if (providerName !== null) {
      this.localstorage.setName(providerName);      
      this.navCtrl.setRoot(HomeProviderPage);
    } else {
      this.navCtrl.setRoot(HomePage);      
      this.utility.presentAlert('login', 'The user doesnt exist.Kindly signUp');      
    }
  }

}
