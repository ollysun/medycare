import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientPage } from './patient';

@NgModule({
  declarations: [
    PatientPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientPage),
  ],
  exports: [
    PatientPage
  ]
})
export class PatientPageModule {}
