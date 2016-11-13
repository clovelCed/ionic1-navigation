import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DetailPage } from '../pages/detail/detail';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    DetailPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailPage,
    HomePage
  ],
  providers: []
})
export class AppModule { }
