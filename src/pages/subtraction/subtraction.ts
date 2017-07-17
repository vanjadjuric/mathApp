import { SuccessModalPage } from '../success-modal/success-modal';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubtractionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-subtraction',
  templateUrl: 'subtraction.html',
})
export class SubtractionPage {

  diffLevel: any;
  showPage: boolean = true;
  resultArray: Array<any> = Array<any>();
  firstNumber: number;
  secondNumber: number;
  result: number;
  questionNumber = 0;
  wrongAnswer = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.diffLevel = this.navParams.get('diffLevel');
    this.GenerateTask();
  }


  GoBack() {
    this.navCtrl.popToRoot();
  }


  GenerateTask() {

    this.resultArray = [];
    console.log('diff level:' + this.diffLevel + '---' + this.diffLevel * 2);
    this.firstNumber = this.getRandomInt(this.diffLevel, this.diffLevel * 2);
    this.secondNumber = this.getRandomInt(this.diffLevel, this.diffLevel * 2);
    let temp;
    if (this.firstNumber < this.secondNumber) {
      temp = this.firstNumber;
      this.firstNumber = this.secondNumber;
      this.secondNumber = temp;
    }
    if (this.firstNumber == this.secondNumber) {
      this.firstNumber += 6;
    }
    this.result = this.firstNumber - this.secondNumber;

    let resultPosition = Math.floor((Math.random() * 4) + 1);
    for (var index = 1; index < 5; index++) {
      let randomResult = this.getRandomInt(this.result - 7, this.result + 7);
      if (index == resultPosition) {
        this.resultArray.push(this.result);
      }
      else {
        this.resultArray.push(randomResult);
      }
    }

    // this.resultArray.forEach(item => {
    //   this.resultArray.forEach(item2 => {
    //     if (item == item2) {
    //       item
    //     }
    //   });
    // });  

    this.createUniqueArray(this.resultArray);

  }

  createUniqueArray(array) {

    let uniqueArray = array.filter(function (elem, index, self) {
      return index == self.indexOf(elem);
    });


    if (uniqueArray.length < 4) {
      this.GenerateTask();
    }
    else {
      this.questionNumber++;
    }

  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min)) + min;
    if (result < 0)
      result = Math.abs(result);
    else if (result == 0) {
      result = 3;
    }
    return result;
  }

  chooseResult(selectedResult) {
    if (selectedResult == this.result) {
      console.log(this.questionNumber);
      if (this.questionNumber == 1) {
        let modal = this.modalCtrl.create(SuccessModalPage);
        modal.present();
        this.showPage = false;
        modal.onDidDismiss(data => {
          if (data == 'again') {
            this.questionNumber = 0;
            this.GenerateTask();
            this.showPage = true;
          }
          else if (data == 'home') {
            this.navCtrl.popToRoot();
          }

        });
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
