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

/*
  Generated class for the DiagoniseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DiagoniseProvider {
  public userProfileRef: firebase.database.Reference;
  private diagoniseRef: FirebaseListObservable<any[]>;

  constructor(public http: Http,
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase) {
      this.diagoniseRef = db.list('/diagonise');
  }

  createDiagonise = function (diagonise)
  {
      
  }

}
