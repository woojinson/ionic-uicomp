import { Component } from '@angular/core';
import {
  ActionSheetController, AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams,
  Platform, ToastController
} from 'ionic-angular';
import {ModalPage} from "../modal/modal";
import {AccountInterface} from "../../interfaces/account";
import {LoaderProvider} from "../../providers/loader/loader";

/**
 * Generated class for the ComponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-component',
  templateUrl: 'component.html',
})
export class ComponentPage {

  private accountData = {} as AccountInterface;

  constructor(public navCtrl: NavController,
              public actionsheetCtrl : ActionSheetController,
              public modalCtrl:ModalController,
              public alertCtrl:AlertController,
              public toastCtrl: ToastController,
              //public loadingCtrl: LoadingController,
              public loaderProvider: LoaderProvider,
              public platform:Platform,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentPage');
  }

  actionSheet() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Choose Menu',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            alert('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  modal() {
    let modal = this.modalCtrl.create("ModalPage");
    modal.onDidDismiss(data => console.log(data));
    modal.present();
  }

  slide() {
    this.navCtrl.push("SlidePage");
  }

  promptAlert(){
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "이름과 E-Mail를 입력하세요",
      inputs: [
        { name: 'name', placeholder: 'Name 입력' },
        { name: 'email', placeholder: 'Email 입력' },
      ],
      buttons: [
        { text: '취소', handler: data => { console.log('Cancel clicked'); } },
        { text: '저장',
          handler: data => {
            this.accountData = { name : data.name, email : data.email }
            this.navCtrl.push('NavPage',{account:this.accountData});
          }
        }
      ]
    });


    prompt.present();
    console.log(this.accountData);
  }

  toast() {
    let toast = this.toastCtrl.create({
      message: '3초동안보였다가사라집니다.',
      duration: 3000,
      position : 'top',
      showCloseButton:true,
      closeButtonText: 'OK'
    });
    toast.onDidDismiss(() => {console.log("Dismissed toast");});
    toast.present();
  }

  loading(){
    /**
    let loading = this.loadingCtrl.create({
      content:'잠시만 기다려 주세요..'
    });
    loading.present();
     /**/
    this.loaderProvider.show();

    setTimeout(()=>{
      //loading.dismiss();
      this.loaderProvider.hide();
    }, 3000);
  }


}
