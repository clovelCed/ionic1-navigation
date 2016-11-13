import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'detail.html'
})
export class DetailPage {

  public name: String;
  public splash: String;
  public photo: String;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.name = this.params.get('name');
    this.splash = this.params.get('splash');
    this.photo = this.params.get('photo');
  }

  public goBack() {
    this.navCtrl.pop();
  }

}
