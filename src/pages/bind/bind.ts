import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//{name:'bindPage'}
@IonicPage()
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html',
})
export class BindPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // 화면이 load되고 난후 에 바로 호출되는 life cycle method 메서드
  ionViewDidLoad() {
    console.log('1. >> BindPage ionViewDidLoad  ' + this.navParams.get("name"));
  }

  goBack() {
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
    console.log("2.>> BindPage ionViewWillEnter() 호출");
  }

  ionViewWillUnload() {
    console.log("3.>> BindPage ionViewWillUnload() 호출");
  }
}
