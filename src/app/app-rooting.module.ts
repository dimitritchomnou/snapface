import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapCopoment } from './single-face-snap/single-face-snap.component';

//Déclaration de nos routes(urls)
const routes: Routes = [
  { path: 'facesnap/:id', component: SingleFaceSnapCopoment },
  { path: 'listfacesnaps', component: FaceSnapListComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], //
}) //Décorateur pour module
export class AppRootingModule {}
