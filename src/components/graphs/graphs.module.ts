import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { GraphsComponent } from './graphs';

@NgModule({
  declarations: [
    GraphsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    GraphsComponent
  ]
})
export class GraphsComponentModule {}
