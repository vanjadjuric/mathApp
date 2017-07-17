import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseDifficultyPage } from './choose-difficulty';

@NgModule({
  declarations: [
    ChooseDifficultyPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseDifficultyPage),
  ],
  exports: [
    ChooseDifficultyPage
  ]
})
export class ChooseDifficultyPageModule {}
