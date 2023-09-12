import { NgModule, LOCALE_ID } from '@angular/core'; //Manage date
import { BrowserModule } from '@angular/platform-browser';
//Manage language
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@NgModule({
  declarations: [AppComponent, FaceSnapComponent],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }], //Add french language config
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default); //Manage french lang
  }
}
