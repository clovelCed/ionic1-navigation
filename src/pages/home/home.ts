import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contact, CONTACTS } from '../../dto/contact';
import {ContactPage} from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public contacts: Contact[] = CONTACTS;

  constructor(public navCtrl: NavController) { }

  public open(contact: Contact) {
    this.navCtrl.push(ContactPage, {
      'dataParams': contact
    });
  }

}
