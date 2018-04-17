import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'bindPage'})
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html',
})
export class BindPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {//라이프 사이클 관련 메서드==> 화면이 로드 되자마자 바로 호출 되는 메서드
    console.log('ionViewDidLoad BindPage');
    alert('ionViewDidLoad BindPage = '+this.navParams.get("name"));
  }

  goBack() {
    this.navCtrl.pop();
  }

}
