#Webaxx - Ionic 2 Navigation


![GitHub Logo](/resources/image1.png)

![GitHub Logo](/resources/image2.png)


Example ionic navigation with params !

- Home page preview
```javascript

export class HomePage {

  public contacts: Contact[] = CONTACTS;

  constructor(public navCtrl: NavController) { }

  public open(contact: Contact) {
    this.navCtrl.push(ContactPage, {
      'dataParams': contact
    });
  }
}
```

- Contact page preview
```javascript

export class ContactPage {

  public selectedContact: Contact;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.selectedContact = this.params.get('dataParams');
  }

}
```

- Contact html page preview
```html

<ion-item>
  <ion-avatar item-left>
    <img [src]="selectedContact.photo">
  </ion-avatar>
  <h2>{{selectedContact.name}}</h2>
  <p>{{selectedContact.mail}}</p>
</ion-item>

<img [src]="selectedContact.splash">
```
