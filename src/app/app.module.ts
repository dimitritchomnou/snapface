import { NgModule, LOCALE_ID } from '@angular/core'; //Manage date
import { BrowserModule } from '@angular/platform-browser';
//Manage language
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HearderComponent } from './hearder/hearder.component';
import { AppRootingModule } from './app-rooting.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapCopoment } from './single-face-snap/single-face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    LandingPageComponent, //Ajouter le composant lorsqu'on créer une
    HearderComponent,
    SingleFaceSnapCopoment,
  ],
  imports: [BrowserModule, AppRootingModule] /*module rooting*/,
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }], //Add french language config
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default); //Manage french lang
  }
}
