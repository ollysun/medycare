import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { ProviderPage } from '../provider/provider';
import { PatientPage } from '../patient/patient';

@NgModule({
  declarations: [
    RegisterPage,
    ProviderPage,
    PatientPage
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
  exports: [
    RegisterPage,
    ProviderPage,
    PatientPage
  ]
})
export class RegisterPageModule {}
