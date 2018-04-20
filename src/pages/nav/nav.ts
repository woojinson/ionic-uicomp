import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccountInterface} from "../../interfaces/account";
import {EmailComposer} from "@ionic-native/email-composer";

/**
 * Generated class for the NavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {

  private accountData = {} as AccountInterface;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private emailComposer:EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavPage');
    this.accountData = this.navParams.get("account");
  }

  sendEmail(account){
    let email = {
      to: account.email,
      subject: 'To : '+account.name,
      body: '',
      isHtml:true

    };
    this.emailComposer.open(email);
  }

}
