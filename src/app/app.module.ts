import { ChooseDifficultyPage } from '../pages/choose-difficulty/choose-difficulty';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AdMobFree } from '@ionic-native/admob-free';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdditionPage } from '../pages/addition/addition';
import { SubtractionPage } from '../pages/subtraction/subtraction';
import { SuccessModalPage } from "../pages/success-modal/success-modal";
import { MultiplyPage } from "../pages/multiply/multiply";
import { DividePage } from "../pages/divide/divide";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdditionPage,
    SubtractionPage,
    SuccessModalPage,
    ChooseDifficultyPage,
    DividePage,
    MultiplyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdditionPage,
    SubtractionPage,
    SuccessModalPage,
    ChooseDifficultyPage,
    MultiplyPage,
    DividePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
