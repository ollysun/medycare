import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } 
from 'ionic-angular';
import { IonTagsInputModule } from "ionic-tags-input";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { HttpModule } from '@angular/http';
import { RegisterPage } from '../pages/register/register';
import { ProviderPage } from '../pages/provider/provider';
import { PatientPage } from '../pages/patient/patient';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthProvider } from '../providers/auth/auth';
import { EmailComposer } from '@ionic-native/email-composer';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import	{	ReactiveFormsModule	} from	'@angular/forms' ;
import { HomePatientPage } from '../pages/home-patient/home-patient';
import { HistoryPage } from '../pages/history/history';
import { SchedulePage } from '../pages/schedule/schedule';
import { DiagonisePage } from '../pages/diagonise/diagonise';
import { IonicStorageModule } from '@ionic/storage';
import { LocalstorageProvider } from '../providers/localstorage/localstorage';
import { DiagoniseProvider } from '../providers/diagonise/diagonise';
import { HistoryProvider } from '../providers/history/history';
import { ScheduleProvider } from '../providers/schedule/schedule';
import { UtilityProvider } from '../providers/utility/utility';
import { HomeProviderPage } from '../pages/home-provider/home-provider';
import { ProviderSchedulePage } from '../pages/provider-schedule/provider-schedule';
import { HistoryDetailPage } from '../pages/history-detail/history-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    ProviderPage,
    PatientPage,
    ResetPasswordPage,
    HomePatientPage,
    HistoryPage,
    SchedulePage,
    DiagonisePage,
    HomeProviderPage,
    ProviderSchedulePage,
    HistoryDetailPage,
  ],
  imports: [
    BrowserModule, HttpModule, ReactiveFormsModule,
    IonTagsInputModule,
    AngularFireModule.initializeApp(environment.firebase, 'medycare'),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    ProviderPage,
    PatientPage,
    ResetPasswordPage,
    HomePatientPage,
    HistoryPage,
    SchedulePage,
    DiagonisePage,
    HomeProviderPage,
    ProviderSchedulePage,
    HistoryDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    AuthProvider,
    EmailComposer,
    LocalstorageProvider,
    DiagoniseProvider,
    HistoryProvider,
    ScheduleProvider,
    UtilityProvider
  ]
})
export class AppModule {}
