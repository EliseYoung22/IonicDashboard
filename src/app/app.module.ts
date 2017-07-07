import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChartjsPage } from '../pages/chartjs/chartjs';
import { HighchartsPage } from '../pages/highcharts/highcharts';

import { ChartModule } from 'angular2-highcharts';
declare var require: any;


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubserviceProvider } from '../providers/githubservice/githubservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, 
    ChartjsPage,
    HighchartsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartModule.forRoot(
    require('Highcharts'),require('../../node_modules/highcharts/highcharts-more.js'),require('highcharts/modules/exporting'),
    ),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, 
    ChartjsPage,
    HighchartsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubserviceProvider
  ]
})
export class AppModule {}
