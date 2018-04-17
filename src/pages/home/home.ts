import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userName:any;//변수 선언 : 타입스크립트
  items = [
    {"id":1, name:"Comment"},
    {"id":2, name:"두번째 Item"},
    {"id":3, name:"세번째 Item"},
  ];

  disableSwitch=false;

  itemSelected(item){
    alert(item.id);
    if(item.id === 1) {
      this.navCtrl.push('componentPage')
    }
  }

  myButton(event){
    alert('componentPage 을 입력하세요.userName = '+this.userName);
    if(typeof this.userName !== "undefined"){
      //alert(event.target.textContent)
      console.log(event.target.textContent + ","+ event.clientX + ","+event.clientY);
      this.navCtrl.push('BindPage', {name:this.userName});
    }else{
      alert('userName 을 입력하세요.');
    }

  }

  constructor(public navCtrl: NavController) {//생성자 = 객체 생성시 잴 먼져 호출됨
    this.userName = "아이오닉";//값을 할 당
  }

  ionViewDidLoad(){
    alert('ionViewDidLoad 을 call.');

  }

  ionViewWillEnter() {
    alert('ionViewWillEnter 을 call.');

  }

  ionViewWillUnload() {
    alert('ionViewWillUnload 을 call.');

  }
}
