import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Provider } from '../../Model/Provider';
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
  countries = [];
  states = [];
  providerList: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    model: Provider,
    db: AngularFireDatabase) {
    this.provider = model;
    this.providerList = db.list('/providers');
    this.countries = [
      "Nigeria",
      "Ghana",
      "Tanzania"
    ];

    this.states = [
      "Lagos",
      "Kaduna",
      "Osun"
    ]
  }

  signUp() {
    this.providerList.push({
      title: this.provider.title,
      fullname: this.provider.fullname,
      username: this.provider.username,
      email: this.provider.email,
      password: this.provider.password,
      address: this.provider.address,
      phoneNumber: this.provider.phoneNo,
      country: this.provider.country,
      state: this.provider.state,
      specialty: this.provider.specialty
    }).then(newProvider => {
      console.log(newProvider);
    }, error => {
      console.log(error);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderPage');
  }

}
