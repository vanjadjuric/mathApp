import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdditionPage } from '../addition/addition';
import { ChooseDifficultyPage } from "../choose-difficulty/choose-difficulty";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  GoToDifficulty(operation) {
    this.navCtrl.push(ChooseDifficultyPage, { operation: operation });
  }

}
