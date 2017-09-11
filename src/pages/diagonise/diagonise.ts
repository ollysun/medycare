import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams,
  AlertController, LoadingController, Loading,
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';

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
  diseaseType: any = [];
  response: string = 'initial';
  _symptoms: string;
  tags = [];
  diagoniseList: FirebaseListObservable<any[]>;
  _diseasesType:string;
  _doctorReport:string;
  _diseasesArray:any = [
    { type: 'Malaria Fever', medic: 'Go to Pharmacy, Get Amoxylin' }
  ]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    db: AngularFireDatabase,
    public authData: AuthProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private localstorage: LocalstorageProvider
  ) {
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
      'sneezing',
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

  getDiseasesType = function (symptomType) {
    //var response: string = 'initial';
    for (let type of symptomType) {
      // if (type == 'headache' && type == 'body weakness'
      //   || type == 'sneezing') {
      //   this.response = 'Malaria Fever';
      // } else {
      //   this.response = 'false';
      // }
        console.log(type);
      switch(type){
        case 'headache' && 'body weakness' && 'sneezing':
        this.response = 'Malaria Fever';
        break;
        case 'body weakness' && 'stomach ache' && 'headache':
        this.response = 'Typhoid Fever'; 
        break;
        case 'feeling tired' && 'upset stomach' && 'diarrhea'
             && 'fever' && 'loss of appetite':
        this.response = 'Hepatitis A';
        break;
        case 'constant weakness' && 'vomiting' && 'dizziness':
          this.response = 'Pregnancy';
          break;
        case 'unpleasant mouth odour' && 'dry mouth' && 'coating on the tongue':
          this.response = 'Mouth Odour';
          break;
        case 'vision problems' && 'hearing problems' 
          && 'balance problems' && 'changes in mental ability'
          && 'nausea' && 'facial paralysis' && 'numbness in extremities':
          this.response = 'Brain Tumor';
          break;
        case 'dehydration' && 'hunger'
          && 'increased urination' && 'increased thirst'
          && 'weight loss or gain' && 'fatigue' && 'vommitting'
          && 'blurred vision':
          this.response = 'Diabetes';
          break;
        default:
        this.response = 'false';
      }
    }
    // symptomType.forEach(function (type) {
    //   if (type == 'headache' && type == 'body weakness'
    //     || type == 'sneezing') {
    //     this.response = 'Malaria Fever';
    //   } else {
    //     this.response = 'false';
    //   }
    // });
    console.log('res', this.response);
    //return this.response;
  }

  itemTapped(event, item) {
    this.textItem.push(item);
    this._symptoms = this.textItem.join();
  }

prescribe =function(){
  this.getDiseasesType(this.textItem);
 this._diseasesType = 'You are having ' + this.response;
 console.log(this.getSicknessType(this.response));
 //this._doctorReport = this._diseasesArray.map
 //this._doctorReport = 'You will need medication';
}

  getSicknessType(symptom: string): string {
    // var sympType: any;
    // sympType = this._symptoms.split(',')
    // var output = this.getDiseasesType(sympType);
    // console.log('diseases type', output);
    // return;
    const val = this._diseasesArray.filter(c => c.type === symptom);
    console.log(val.medic);
    return val.medic;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagonisePage');
  }

  diagonise() {


  }

}
