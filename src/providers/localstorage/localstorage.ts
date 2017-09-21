import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { SQLite } from 'ionic-native'

/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocalstorageProvider {
  public name: any;
  public email: any;
  public localstorage: any;
  public sessionStorage: any;
  public db: SQLite;
  public data:any = {
    name:'',
    email:''
  };

  constructor(public http: Http,
    public storage: Storage) {
  }

  setPhone = function (phone) {
    this.storage.set('phone', phone);
  }

  getPhone = function () {
    this.storage.get('phone').then(val => {
      console.log('phone: ' + val);
      return val;
    });
  }

  setName = function (name:string) {
    this.storage.set('name', name);
  }

  getName = function (): any {
    this.storage.get('name').then((val) => {
      this.data.name = val;
      console.log('val', this.data.name);
    });
    console.log('local name ', this.data.name);
  }


  //store the email address
  setEmail = function (email:string) {
    this.storage.set('email', email);
  }

  //get the stored email
  getEmail = function (): any {
    this.storage.get('email').then((val) => {
      this.data.email = val;
      console.log('email val', this.data.email);
    });
    console.log('get email', this.data.email);
    return this.email;

  }

  //clear the whole local storage
  clearStorage = function () {
    this.storage.clear().then(() => {
      console.log('all keys are cleared');
    });
  }

}
