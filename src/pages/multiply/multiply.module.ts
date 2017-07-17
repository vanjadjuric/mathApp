import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiplyPage } from './multiply';

@NgModule({
  declarations: [
    MultiplyPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiplyPage),
  ],
  exports: [
    MultiplyPage
  ]
})
export class MultiplyPageModule {}
