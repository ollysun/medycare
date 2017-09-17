import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ScheduleProvider } from "../../providers/schedule/schedule";
import { UtilityProvider } from "../../providers/utility/utility";

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
  public scheduleForm: FormGroup;
  specialities: string[];
  providerName: string[];
  model: any = {
    speciality: "",
    doctorName: "",
    symptoms: "",
    dateCreated: Date,
    comment: "Wait for Doctor comment"
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public utility: UtilityProvider,
    public scheduleProvider: ScheduleProvider) {
    this.specialities = [
      "Medical doctor",
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
    console.log("select value", selectValue);
    if (selectValue !== "") {
      this.providerName = this.scheduleProvider.getProviderName(selectValue.trim());
    } else {
      this.utility.presentToast("There is no Doctor avalilable for the specilty you selected");
    }
  }


  ionViewDidLoad() {
    console.log("ionViewDidLoad SchedulePage");
  }

  scheduleNow = function () {
     this.model.dateCreated = new Date();
      this.scheduleProvider.schedule(this.model);
  }
}
