import { Component } from '@angular/core';
import { NavController, PopoverController} from 'ionic-angular';
import { Champion, CHAMPIONS } from '../../dto/champion';
import {DetailPage} from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public champions: Champion[] = CHAMPIONS;
  public detailPage = DetailPage;

  constructor(public navCtrl: NavController, public pops: PopoverController) { }

  public open(champion: Champion, splash: string) {
    this.navCtrl.push(DetailPage, {
      'name': champion.name,
      'photo': champion.photo,
      'splash': splash
    });
  }

  public createParams(contact: Champion) {
    return {
      'name': contact.name,
      'photo': contact.photo,
      'splash': contact.splash2
    };
  }
}
