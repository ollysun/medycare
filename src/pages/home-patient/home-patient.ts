import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, 
         MenuController, Events } from 'ionic-angular';
import { DiagonisePage } from '../diagonise/diagonise';
import { HistoryPage } from '../history/history';
import { SchedulePage } from '../schedule/schedule';

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
  @ViewChild(DiagonisePage) dpage: DiagonisePage;
  //@ViewChild(Nav) nav: Nav;
  rootPage: any = this;
  private diagonisePage;
  private historyPage;
  private schedulePage; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menu:MenuController,
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

  // diagonise(Page) {
  //   this.nav.setRoot(DiagonisePage);
  // }

  closeMenu()
  {

  }

  meetDoctor() {
    
  }

  history() {
  }

}
