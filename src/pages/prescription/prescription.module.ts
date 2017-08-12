import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrescriptionPage } from './prescription';

@NgModule({
  declarations: [
    PrescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(PrescriptionPage),
  ],
  exports: [
    PrescriptionPage
  ]
})
export class PrescriptionPageModule {}
