import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HighchartsPage } from './highcharts';

@NgModule({
  declarations: [
    HighchartsPage,
  ],
  imports: [
    IonicPageModule.forChild(HighchartsPage),
  ],
  exports: [
    HighchartsPage
  ]
})
export class HighchartsPageModule {}
