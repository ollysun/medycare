import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(page)
  {
      if (page === 'register') {
            this.navCtrl.push(RegisterPage);
      }
  }

login()
{
    
}

  back()
  {
    if (this.navCtrl.length() >= 2) {
        this.navCtrl.pop();
    }
  }

}
