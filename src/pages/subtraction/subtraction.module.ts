import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubtractionPage } from './subtraction';

@NgModule({
  declarations: [
    SubtractionPage,
  ],
  imports: [
    IonicPageModule.forChild(SubtractionPage),
  ],
  exports: [
    SubtractionPage
  ]
})
export class SubtractionPageModule {}
