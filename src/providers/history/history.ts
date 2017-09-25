import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
import { UtilityProvider } from '../../providers/utility/utility';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HistoryProvider {
  private diagoniseRef: FirebaseListObservable<any[]>;
  diagoniseData = [];
  returnObj = [];

  constructor(public http: Http,
    public db: AngularFireDatabase,
    public af: AuthProvider,
    public utility: UtilityProvider) {
    this.diagoniseRef = db.list('/userProfile/diagonise');
    this.diagoniseRef.subscribe(data => {
      data.forEach(item => {
        this.diagoniseData.push(item);
      });
    });
  }

  getDiagoniselist = function (): any {
    var dataobj: any;
    var name: string = this.af.getCurrentUserName();
    if (this.diagoniseData !== undefined) {
      dataobj = this.diagoniseData.find(c => c.name === name);
      if (dataobj !== undefined) {
        this.returnObj.push(dataobj);
        return this.returnObj;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

}
