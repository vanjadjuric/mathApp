import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SuccessModalPage } from '../success-modal/success-modal';

@IonicPage()
@Component({
  selector: 'page-addition',
  templateUrl: 'addition.html',
})
export class AdditionPage {
  resultArray: Array<any> = Array<any>();
  firstNumber: number;
  secondNumber: number;
  result: number;
  questionNumber = 0;
  wrongAnswer = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.GenerateTask();
  }


  GoBack() {
    this.navCtrl.pop();
  }


  GenerateTask() {
    this.questionNumber++;
    this.resultArray = [];
    this.firstNumber = Math.floor((Math.random() * 10) + 1);
    this.secondNumber = Math.floor((Math.random() * 10) + 1);
    this.result = this.firstNumber + this.secondNumber;

    let resultPosition = Math.floor((Math.random() * 4) + 1);
    console.log('---------' + resultPosition);
    for (var index = 1; index < 5; index++) {
      let randomResult = this.getRandomInt(this.result - 7, this.result + 7);
      if (index == resultPosition) {
        this.resultArray.push(this.result);
      }
      else {
        this.resultArray.push(randomResult);
      }
      console.log(index);
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min)) + min;
    if (result < 0)
      result = 1;
    return result;
  }

  chooseResult(selectedResult) {
    console.log(selectedResult);
    if (selectedResult == this.result) {
      console.log('tacno!!');
      if (this.questionNumber == 3) {
        let modal = this.modalCtrl.create(SuccessModalPage);
        modal.present();
      } else {
        this.wrongAnswer = false;
        this.GenerateTask();
      }

    }
    else {
      this.wrongAnswer = true;
    }
  }

}
