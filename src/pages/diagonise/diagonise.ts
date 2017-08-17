import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';

/**
 * Generated class for the DiagonisePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-diagonise',
  templateUrl: 'diagonise.html',
})
export class DiagonisePage {
  public diagoniseForm: FormGroup;
  showList: boolean = false;
  items: string[];
  textItem = [];
  _symptoms:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
    this.diagoniseForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      tellUs: ['', Validators.compose([Validators.required])],
      doctorReport: []
    });
  }

  initializeItems() {
    this.items = [
      'headache',
      'coldness',
      'shivering',
      'catarrh',
      'stomach Upset',
      'dizziness',
      'body weakness',
      'insomia',
      'bodypain',
      'loss appetite',
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      // Filter the items
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

      // Show the results
      this.showList = true;
    } else {

      // hide the results when the query is empty
      this.showList = false;
    }
  }
  itemTapped(event, item)
  {
    this.textItem.push(item);
    this._symptoms = this.textItem.join();
    console.log(this._symptoms);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagonisePage');
  }

  diagonise() {

  }

}
