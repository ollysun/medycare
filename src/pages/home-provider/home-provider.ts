import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, 
  MenuController, Events } from 'ionic-angular';
  import { ProviderSchedulePage } from '../provider-schedule/provider-schedule';
  import { HistoryPage } from '../history/history';
  import { AuthProvider } from '../../providers/auth/auth';
  import { HomePage } from '../home/home';
/**
 * Generated class for the HomeProviderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home-provider',
  templateUrl: 'home-provider.html',
})
export class HomeProviderPage {
  @ViewChild(ProviderSchedulePage) pPage: ProviderSchedulePage;
  rootPage: any = this;
  private historyPage;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authData: AuthProvider,    
    public menu:MenuController,) {
      this.rootPage = ProviderSchedulePage;
      this.historyPage = HistoryPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeProviderPage');
  }

  openPage(p) {
    this.rootPage = p;
  }

  logout()
  {
      this.authData.logoutUser();
      this.navCtrl.setRoot(HomePage);
  }
}
