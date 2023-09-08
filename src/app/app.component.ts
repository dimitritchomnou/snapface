import { Component, OnInit } from '@angular/core'; //Add OnInit
import { FaceSnap } from './model/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // //title = 'snapface';
  faceSnapList!: FaceSnap[];

  ngOnInit() {
    //inialize first propretie
    this.faceSnapList = [
      {
        title: 'Yaya Dima',
        description: 'My best friend for all time',
        createdDate: new Date(),
        snaps: 0,
        image: 'https://ginou.ci/wp-content/uploads/2023/07/ginou-bleu.png',
        location: 'Luxembourg',
      },
      {
        title: 'Yaya Philiph',
        description: 'My best friend for all time',
        createdDate: new Date(),
        snaps: 6,
        image: 'https://ginou.ci/wp-content/uploads/2023/07/Vuejs.jpg',
      },
      {
        title: 'Yaya Philiph',
        description: 'My best friend for all time',
        createdDate: new Date(),
        snaps: 4,
        image: 'https://ginou.ci/wp-content/uploads/2023/07/react.png',
        location: 'Paris',
      },
    ];
  }
}
