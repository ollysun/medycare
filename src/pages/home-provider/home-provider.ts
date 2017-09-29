import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,
  MenuController, Events } from 'ionic-angular';
  import { ProviderSchedulePage } from '../provider-schedule/provider-schedule';
  import { HistoryPage } from '../history/history';
  import { AuthProvider } from '../../providers/auth/auth';
  import { HomePage } from '../home/home';
  import { LocalstorageProvider } from '../../providers/localstorage/localstorage';

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
    public menu:MenuController,
    public localstorage: LocalstorageProvider,
    public events: Events) {
      this.rootPage = ProviderSchedulePage;
      this.historyPage = HistoryPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeProviderPage');
  }

  ionOpened() {
    this.events.publish('menu:opened', '');
  }
  ionClosed() {
    this.events.publish('menu:closed', '');
  }

  openPage(p) {
    this.rootPage = p;
  }

  logout()
  {
      this.authData.logoutUser();
      this.localstorage.clearStorage();
      this.navCtrl.setRoot(HomePage);
  }
}
