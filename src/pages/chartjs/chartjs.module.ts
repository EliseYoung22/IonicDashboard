import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartjsPage } from './chartjs';

@NgModule({
  declarations: [
    ChartjsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartjsPage),
  ],
  exports: [
    ChartjsPage
  ]
})
export class ChartjsPageModule {}
