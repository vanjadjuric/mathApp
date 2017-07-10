import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdditionPage } from '../addition/addition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  GoToAddition() {
    this.navCtrl.push(AdditionPage);
  }

}
