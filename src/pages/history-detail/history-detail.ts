import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoryDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history-detail',
  templateUrl: 'history-detail.html',
})
export class HistoryDetailPage {
  historyDetail = {
    email:'',
    name:'',
    prescription:'',
    sicknessType:'',
    symptoms:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.historyDetail = navParams.get('schedule');
    console.log(this.historyDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryDetailPage');
  }

}
