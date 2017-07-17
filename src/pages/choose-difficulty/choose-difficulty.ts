import { SubtractionPage } from '../subtraction/subtraction';
import { AdditionPage } from '../addition/addition';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DividePage } from "../divide/divide";
import { MultiplyPage } from "../multiply/multiply";

/**
 * Generated class for the ChooseDifficultyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-choose-difficulty',
  templateUrl: 'choose-difficulty.html',
})
export class ChooseDifficultyPage {
  operation: any;
  Difficulties: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.operation = this.navParams.get('operation');

    let diffLevel = 0;
    for (var index = 0; index < 4; index++) {
      diffLevel += 5;
      this.Difficulties.push({ id: this.operation, name: diffLevel + ' - ' + diffLevel * 2, diffLevel: diffLevel });
    }


  }


  GoToHome() {
    this.navCtrl.popToRoot();
  }


  chooseDifficulty(diffLevel) {
    if (this.operation == 'AdditionPage') {
      this.navCtrl.push(AdditionPage, { diffLevel: diffLevel });
    }
    else if (this.operation == 'SubtractionPage') {
      this.navCtrl.push(SubtractionPage, { diffLevel: diffLevel });
    }
    else if (this.operation == 'MultiplyPage') {
      this.navCtrl.push(MultiplyPage, { diffLevel: diffLevel });
    }
    else if (this.operation == 'DividePage') {
      this.navCtrl.push(DividePage, { diffLevel: diffLevel });
    }

  }



}
