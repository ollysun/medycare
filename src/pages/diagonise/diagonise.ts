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
  _diseasesType: string;
  _doctorReport: string;
  _diseasesArray: any = [
    { type: 'Malaria', treatBy: 'Go to Pharmacy, Get Chloroquine or quinine or Coartem' },
    {
      type: 'Cholera',
      treatBy: "Get Ampicillin or Norfloxacin drug"
    },
    { type: 'Measles', treatBy: " Take acetaminophen (Tylenol) drug, lots of rest, and fluids" },
    { type: 'Mumps', treatBy: 'Taking analgesics (acetaminophen, ibuprofen) and applying warm or cold packs to the swollen and inflamed salivary gland region may be helpful' },
    {
      type: 'Flu',
      treatBy: 'Increasing liquid intake, warm showers, and warm compresses, especially in the nasal area, can reduce the body aches and reduce nasal congestion or head congestion. Nasal strips and humidifiers may help reduce congestion, especially while trying to sleep.'
    },
    {
      type: 'polio',
      treatBy: "Treatments vary according to the form of the disease,include antibiotics,pain-relieving medication,and physical therapy to strengthen weak muscles.Immunisation for children"
    },
    { type: 'Strep Throat', treatBy: 'Use Salt gargle .2) Throat Sprays. 3)Hot or cold food with warm tea ' },
    { type: 'SmallPox', treatBy: 'Go To Pharmacy and get the acetaminophen (Tylenol) vaccine' },
    { type: 'Typhoid Fever', treatBy: 'Go to pharmacy and ask for cyproflaxin or Ampicillin vaccine' },
    { type: 'Yellow Fever', treatBy: 'Take yello fever vaccine' },
    { type: 'Tuberculosis', treatBy: 'Go to Hospital and ask for Bacille Calmette-Gurin (BCG) vaccine' },
    { type: 'Hepatitis A', treatBy: 'See your doctor to recommend medicines to help relieve your symptoms' },
    { type: 'Hepatitis B', treatBy: 'Get vaccine called Interferon-alpha from the Pharmacy' }
  ];

  model: {
    patientName:'',
    patientEmail:'',
    symptoms:'',
    sicknessType:'',
    doctorPrescription:''
  }

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
      'stomach_pain',
      'dizziness',
      'weakness',
      'insomia',
      'bodypain',
      'poor_appetite',
      'fatigue',
      'diarrhea',
      'vomiting',
      'leg_cramps',
      'sweating',
      'muscle_pain',
      'fever',
      'malaise',
      'jaundice',
      'muscle_ache',
      'abdominal_pain',
      'high_fever',
      'feeling_tired',
      'upset_stomach',
      'loss_of_appetite',
      'nausea',
      'dehydration',
      'hunger',
      'increased_urination',
       'increased_thirst',
       'weight_loss_or_gain',
       'blurred_vision',
       'dry_cough',
       'conjunctivitis',
       'runny_nose',
       'leg_rash',
       'hand_Rash',
       'face_Rash',
       'back_pain',
       'sore_throat',
       'chest_discomfort',
       'cough',
       'muscle_stiffness(leg & hand)',
       'constipation',
       'blurred_vision'
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
  
  diseasesCategory = {
    'malaria':["headache","vomiting", "weakness", "fever"],
    'Typhoid Fever': ["poor_appetite","abdominal_pain", "high_fever","constipation"],
    'Hepatitis A': ["feeling_tired","upset_stomach", "diarrhea", "fever", "loss_of_appetite"],
    'Hepatitis B': ["fatigue","jaundice", "nausea","abdominal_pain","loss_of_appetite"],
    'Diabetes': ["dehydration", "hunger", "increased_urination","increased_thirst","weight_loss_or_gain",
                 "fatigue","vomiting","blurred_vision"],
    'Cholera':["leg_cramps", "diarrhea","vomiting"],
  };

  check = function(symptomType)
  {
    symptomType.sort();
      for (let key in this.diseasesCategory) {
        const keyV = this.diseasesCategory[key].sort();
        if (symptomType.join(',') === keyV.join(','))
        {
          return key;
        }else{
          console.log('key ' + false);
        }
      }
  }
  getDiseasesType = function (symptomType) {
    //var response: string = 'initial';
    this.check(symptomType);    
    for (let type of symptomType) {
      switch (type.trim()) {
        case 'dry_cough' && 'conjunctivitis' && 'runny_nose' && 'high_fever':
          this.response = 'Measles';
          break;
        case 'fever' && 'headache' && 'weakness' && 'Nausea' && 'vomitting':
          this.response = 'Yellow Fever';
          break;
        case 'fever' && 'headache' && 'leg_rash' && 'hand_Rash' && 'face_Rash' && 'abdominal_pain'
          && 'back_pain':
          this.response = 'SmallPox';
          break;
        case 'sore_throat' && 'headache' && 'fever' && 'upset_stomach':
          this.response = 'Strep Throat';
          break;
        case 'sore_throat' && 'headache' && 'muscle_stiffness(leg & hand)' && 'malaise':
          this.response = 'Polio';
          break;
        case 'chest_discomfort' && 'cough' && 'sneezing' && 'headache' && 'sore_throat':
          this.response = 'Flu';
          break;
        case 'fever' && 'muscle_ache' && 'malaise' && 'low_appetite' && 'headache':
          this.response = 'Mumps';
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
    //return this.response;
  }

  itemTapped(event, item) {
    this.textItem.push(item);
    this._symptoms = this.textItem.join();
  }

  prescribe = function () {
    this.response = this.check(this.textItem);
    if (this.response === false)
    {
        
    }
    this._diseasesType = 'You are having ' + this.response;
    this._doctorReport = this.getSicknessType(this.response);
  }

  getSicknessType(symptom: string): string {
    let val = this._diseasesArray.find(c => c.type == symptom);
    return val.treatBy;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagonisePage');
  }

  diagonise() {


  }

}
