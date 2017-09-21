import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryProvider } from '../../providers/history/history';
import { HistoryDetailPage } from '../history-detail/history-detail';

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
      this.getMyHistory();
  }


 getMyHistory()
 {
   this.myHistoryList = this.historyProvider.getDiagoniselist();
 }

 itemSelected(historyParam)
 {
  this.navCtrl.push(HistoryDetailPage, {
    history: historyParam
  });
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
