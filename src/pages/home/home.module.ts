import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
// import { RegisterPage } from '../register/register';
// import { ResetPasswordPage } from '../reset-password/reset-password';


@NgModule({
  declarations: [
    HomePage,
    //RegisterPage,
    //ResetPasswordPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage,
    //RegisterPage,
    //ResetPasswordPage
  ]
})
export class HomePageModule {}
