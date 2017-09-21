import { Component, ViewChild } from '@angular/core';
import {
  IonicPage, NavController, NavParams, Nav,
  MenuController, Events
} from 'ionic-angular';
import { DiagonisePage } from '../diagonise/diagonise';
import { HistoryPage } from '../history/history';
import { SchedulePage } from '../schedule/schedule';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the HomePatientPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home-patient',
  templateUrl: 'home-patient.html',
})
export class HomePatientPage {
  //@ViewChild(Nav) nav: Nav;
  @ViewChild(DiagonisePage) dpage: DiagonisePage;
  rootPage: any = this;
  private diagonisePage;
  private historyPage;
  private schedulePage;
  private navobj = {
    name: '',
    email: ''
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public authData: AuthProvider,
    public localstorage: LocalstorageProvider,
    public events: Events) {
    this.rootPage = DiagonisePage;
    this.historyPage = HistoryPage;
    this.schedulePage = SchedulePage;
    this.diagonisePage = DiagonisePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePatientPage');
    this.menu.enable(true);
  }

  ionViewDidLeave() {
    this.menu.enable(false);
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

  logout() {
    this.authData.logoutUser();
    this.navCtrl.setRoot(HomePage);
  }

}
