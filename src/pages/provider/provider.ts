import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
})
export class ProviderPage {
  countries = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.countries = [
        "Nigeria",
        "Ghana",
        "Tanzania"
    ];
  }

  country()
  {
    return [
      'Nigeria', 'Ghana', 'Tanzania'
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderPage');
  }

}
