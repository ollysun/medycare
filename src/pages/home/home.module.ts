import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { RegisterPage } from '../register/register';

@NgModule({
  declarations: [
    HomePage,
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage,
    RegisterPage
  ]
})
export class HomePageModule {}
