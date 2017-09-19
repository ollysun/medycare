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
  public name:any;
  public email:any;
  public localstorage:any;
  public sessionStorage:any;


  constructor(public http: Http,
    public storage: Storage) {
      this.localstorage = window.localStorage;
      this.sessionStorage = window.sessionStorage;
  }

  setPhone = function (phone)
  {
    this.storage.set('phone', phone);
  }

  getPhone = function()
  {
    this.storage.get('phone').then(val => {
      console.log('phone: ' + val);
      return val;
    });
  }

  setName = function (name) {
  //  this.storage.set('name', JSON.stringify(name));
    this.storage.set('name', name);
    console.log('name set',name);
  }

  getName = function ():any {
    this.storage.get('name').then(val => {
        this.name = val;    
        return this.name;        
    });
    //this.name = this.storage.get('name');
    //console.log('name get ', this.name);
    //return this.name;
  }


  //store the email address
  setEmail = function(email) {
    this.storage.set('email', email);
    console.log('set email', email);
  }

  //get the stored email
  getEmail = function():any {
    this.storage.get('email').then(function(val){
        //this.email = val;
        console.log('local email ', val);       
        //return val;
    }, function(err) {
      console.log(err); // Error: "It broke"
    });
    console.log('email', this.storage.get('email'));    
    return this.email;

  }

  //clear the whole local storage
  clearStorage = function() {
    this.storage.clear().then(() => {
      console.log('all keys are cleared');
    });
  }

}
