import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  userName:any;//변수 선언 : 타입스크립트
  
  constructor(public navCtrl: NavController) {//생성자 = 객체 생성시 잴 먼져 호출됨
    this.userName = "아이오닉";//값을 할 당
  }

}
