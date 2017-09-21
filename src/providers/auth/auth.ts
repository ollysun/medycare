import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFireDatabase, FirebaseListObservable
} from 'angularfire2/database';
import firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {
  public userProfileRef: firebase.database.Reference;
  private providerRef: FirebaseListObservable<any[]>;
  private patientRef: FirebaseListObservable<any[]>;
  ptobj:any;
  pdobj:any;
  constructor(public http: Http,
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase) {
    this.providerRef = db.list('/userProfile/provider');
    this.patientRef = db.list('/userProfile/patient');
    this.patientRef.subscribe(data => {
     this.ptobj = data;
    });
    this.providerRef.subscribe(data => {
      this.pdobj = data;      
    });
  }

  loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
  }

  resetPassword(email: string): firebase.Promise<any> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<any> {
    return this.afAuth.auth.signOut();
  }

  // signUpUser(newEmail: string, newPassword: string): firebase.Promise<any> {
  //   return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
  // }

  getUser = function (): firebase.User {
    return this.afAuth.auth.currentUser;
  }

  anonymousLogin = function (): firebase.Promise<any> {
    return this.afAuth.auth.signInAnonymously();
  }

  createProviderUser = function (provider): firebase.Promise<any> {
    //const rst = this.afAuth.auth.createUserWithEmailAndPassword(provider.email, provider.password);
    return this.afAuth.auth.createUserWithEmailAndPassword(provider.email, provider.password)
      .then(user => {
        this.providerRef.push({
          userId: user.uid,
          title: provider.title,
          fullname: provider.fullname,
          email: provider.email,
          password: provider.password,
          address: provider.address,
          phoneNumber: provider.phoneNo,
          clinic: provider.clinic,
          specialty: provider.specialty
        })
      })
    // }).catch(function(error){
    //   console.log(error.code);
    //   console.log(error.message);
    // });
  }

  createPatientUser = function (patient): firebase.Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(patient.email, patient.password)
      .then(user => {
        this.patientRef.push({
          userId :user.uid,
          fullname: patient.fullname,
          email: patient.email,
          password: patient.password,
          address: patient.address,
          phoneNumber: patient.phoneNumber,
          gender: patient.gender,
          bloodType: patient.bloodType,
          weight: patient.weight,
          height: patient.height,
          dateOfBirth: patient.dateOfBirth
        })
      });
    // }, error => {
    //   console.log(error);
    //   console.log(error.code);
    //   console.log(error.message);
    // });
  }

  getPatientName = function (email):string {
    var nameobj:any;
    var name:string;
    if (this.ptobj !== undefined)
    {
      nameobj = this.ptobj.find(c => c.email === email); 
      if (nameobj !== undefined)
      {
         name = nameobj.fullname;
      }else{
          name = null;
      }      
    }else{
      name = null;
    }
    return name;
  }

  getProviderName = function (email): string {
    var nameobj:any;   
    var name:string;
    if (this.pdobj !== undefined)
    {
      nameobj = this.ptobj.find(c => c.email === email);  
      if (nameobj !== undefined)
      {
        name = nameobj.fullname;
      }else {
        name = null;
      }
    }else{
     name = null;
    }

    return name;
  }

  getcurrentUserEmail():string
  {
    return this.afAuth.auth.currentUser.email;
  }

  checkPatientName = function (email): string {
    let patientName = this.getPatientName(email);
    if (patientName !== null) {
      return patientName;
    } else {
      return null;
    }
  }

  checkProviderName = function (email) {
    let providerName = this.getProviderName(email);
    if (providerName !== null) {
      return providerName;
    } else {
      return null;
    }
  }

  getCurrentUserName():string
  {
    let modelName;
    const modelEmail = this.getcurrentUserEmail();
    if (this.checkPatientName(modelEmail) !== null)
    {
      modelName = this.checkPatientName(modelEmail);
    }else if(this.checkProviderName(modelEmail) !== null)
    {
      modelName = this.checkProviderName(modelEmail);
    }
    return modelName;
  }

}
