import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    ProviderPage,
    PatientPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule, HttpModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'medycare'),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    ProviderPage,
    PatientPage,
    ResetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    AuthProvider,
    EmailComposer
  ]
})
export class AppModule {}
