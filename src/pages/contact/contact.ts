import { Component } from '@angular/core';

import { NavController, NavParams} from 'ionic-angular';
import {Contact} from '../../dto/contact';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public selectedContact: Contact;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.selectedContact = this.params.get('dataParams');
  }

}
