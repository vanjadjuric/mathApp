import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-success-modal',
  templateUrl: 'success-modal.html',
})
export class SuccessModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }


  GoBack() {
    this.viewCtrl.dismiss();
  }

}
