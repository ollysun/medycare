import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ScheduleProvider } from "../../providers/schedule/schedule";
import { UtilityProvider } from "../../providers/utility/utility";
import { AuthProvider } from '../../providers/auth/auth';
import { DiagonisePage } from '../diagonise/diagonise';

/**
 * Generated class for the SchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-schedule",
  templateUrl: "schedule.html",
})
export class SchedulePage {
  specialities: string[];
  providerName=[];
  model: any = {
    specialty: "",
    doctorName: "",
    symptoms: "",
    dateCreated: '',
    comment: "Wait for Doctor comment"
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public utility: UtilityProvider,
    public af:AuthProvider,
    public scheduleProvider: ScheduleProvider) {
    this.specialities = [
      "Medical Doctor",
      "Surgical Technologist",
      "Pharmacist",
      "Dentist",
      "Cardiology",
      "Nurse",
      "Physician Assistant",
      "Registered  Pharmacist(RPh)",
      "Registered  Dietitian(RD)",
      "Respiratory therapist(RT)",
      "Physical therapist(PT)",
      "Occupational therapist (OT)",
      "Speech therapist",
      "Audiologist",
      "Clinical Psychologist"
    ];


  }

  onSelectChange = function (selectValue: any) {
    if (selectValue !== "") {
      if (this.providerName !== null)
      {
        this.providerName.push(this.af.getProvidersName(selectValue.trim()));                
      }else
      {
        this.utility.presentToast("There is no Doctor avalilable for the specilty you selected");           
      }
    } 
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SchedulePage");
  }

  scheduleNow = function () {
     this.model.dateCreated = new Date();
      this.scheduleProvider.schedule(this.model);
      this.navCtrl.setRoot(DiagonisePage);      
  }
}
