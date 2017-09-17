import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocalstorageProvider {
  private name:string;
  private email:string;

  constructor(public http: Http,
    private storage: Storage) {
    console.log('Hello LocalstorageProvider Provider');
  }

  setPhone = function (phone)
  {
    this.storage.set('phone', phone)
  }

  getPhone = function()
  {
    this.storage.get('phone').then(val => {
      console.log('phone: ' + val);
      return val;
    });
  }

  setName = function (name) {
    this.storage.set('name', name)
  }

  getName = function ():string {
    this.storage.get('name').then(val => {
      this.name = val;
    });
    return this.name
  }

  //store the email address
  setEmail = function(email) {
    this.storage.set('email', email);
  }

  //get the stored email
  getEmail = function():string {
    this.storage.get('email').then(val => {
      console.log('email: ' + val);
      this.email = val;
    });
    return this.email;

  }

  //clear the whole local storage
  clearStorage = function() {
    this.storage.clear().then(() => {
      console.log('all keys are cleared');
    });
  }

}
