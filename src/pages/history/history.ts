import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HistoryProvider } from '../../providers/history/history';

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  myHistoryList:any[];


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public historyProvider: HistoryProvider) {
  }


 getMyHistory()
 {
   this.myHistoryList = this.historyProvider.getDiagoniselist();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
