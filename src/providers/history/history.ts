import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase/app';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { UtilityProvider } from '../../providers/utility/utility';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HistoryProvider {
  private historyRef: FirebaseListObservable<any[]>;
  private diagoniseRef: FirebaseListObservable<any[]>;
  private name: string;

  constructor(public http: Http,
              public db: AngularFireDatabase,
              public localstore:LocalstorageProvider,
              public utility:UtilityProvider ) {
    this.name = localstore.getName();
    this.diagoniseRef = db.list('/userProfile/patient/diagonise/' + this.name);
  }

  getDiagoniselist = function (): any[] {
    let name: string[];
    this.providerRef.subscribe(data => {
      // data.forEach(function (item) {
      //   if (item.specialty === specialty) {
      //     name.push[item.fullname];
      //   }
      // });
      //name.push[]
      name = data;
    });
    return name;
  }

}
