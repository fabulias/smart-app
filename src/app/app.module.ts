import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ScheduleFormPage } from '../pages/schedule-form/schedule-form';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SchedulePage } from '../pages/schedule/schedule';
import { TabsPage } from '../pages/tabs/tabs';
import { IonicStorageModule } from '@ionic/storage';
import { Push } from '@ionic-native/push';
import { Network } from '@ionic-native/network';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScheduleProvider } from '../providers/schedule/schedule';
import { HomeProvider } from '../providers/home/home';
import { SchedulePipe } from '../pipes/schedule/schedule';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SchedulePage,
    SchedulePipe,
    TabsPage,
    ScheduleFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SchedulePage,
    TabsPage,
    ScheduleFormPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ScheduleProvider,
    HomeProvider,
    Network,
    Push
  ]
})
export class AppModule { }
