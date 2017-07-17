import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SuccessModalPage } from '../success-modal/success-modal';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-addition',
  templateUrl: 'addition.html',
})
export class AdditionPage {
  diffLevel: any;
  showPage: boolean = true;
  resultArray: Array<any> = Array<any>();
  firstNumber: number;
  secondNumber: number;
  result: number;
  questionNumber = 0;
  wrongAnswer = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private admobFree: AdMobFree) {
    this.diffLevel = this.navParams.get('diffLevel');
    this.GenerateTask();

    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting: true,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
  }



  GoBack() {
    this.navCtrl.popToRoot();
  }


  GenerateTask() {
    this.questionNumber++;
    this.resultArray = [];
    console.log('diff level:' + this.diffLevel + '---' + this.diffLevel * 2);
    this.firstNumber = this.getRandomInt(this.diffLevel, this.diffLevel * 2);
    this.secondNumber = this.getRandomInt(this.diffLevel, this.diffLevel * 2);
    this.result = this.firstNumber + this.secondNumber;

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
