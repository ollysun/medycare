import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePatientPage } from './home-patient';

@NgModule({
  declarations: [
    HomePatientPage,
  ],
  imports: [
    IonicPageModule.forChild(HomePatientPage),
  ],
  exports: [
    HomePatientPage
  ]
})
export class HomePatientPageModule {}
