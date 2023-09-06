import { Component, OnInit } from '@angular/core'; //Add OnInit
import { FaceSnap } from './model/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //title = 'snapface';
  mySnap!: FaceSnap; //creat propretie
  mySnapTwo!: FaceSnap; //creat second propretie

  ngOnInit() {
    //inialize first propretie
    this.mySnap = new FaceSnap(
      'Yaya Dima',
      'My best friend for all time',
      new Date(),
      0,
      'https://ginou.ci/wp-content/uploads/2023/07/ginou-bleu.png'
    );

    //inialize second propretie
    this.mySnapTwo = new FaceSnap(
      'Yaya Philiph',
      'My best friend for all time',
      new Date(),
      6,
      'https://ginou.ci/wp-content/uploads/2023/07/Vuejs.jpg'
    );
  }
}
