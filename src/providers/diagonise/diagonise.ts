import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2/database';
import firebase from 'firebase/app';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { UtilityProvider } from '../../providers/utility/utility';

/*
  Generated class for the DiagoniseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DiagoniseProvider {
  public userProfileRef: firebase.database.Reference;
  private diagoniseRef: FirebaseListObservable<any[]>;
  private name: string;

  constructor(public http: Http,
    public afAuth: AngularFireAuth,
    public localstore: LocalstorageProvider,
    public utility: UtilityProvider,
    public db: AngularFireDatabase) {
    this.name = localstore.getName();
    this.diagoniseRef = db.list('/userProfile/patient/diagonise/' + this.name);
  }

  createDiagonise = function (diagonise) {
    this.diagoniseRef.push({
      name: diagonise.name,
      email: diagonise.email,
      symptoms: diagonise.symptoms,
      sicknessType: diagonise.sicknessType,
      prescription: diagonise.prescription,
      dateDiagonised: diagonise.diagoniseDate
    }).then(newDiagonise => {
    }, error => {
      console.log('Diagonise error data ' + error);
    });
  }

}
