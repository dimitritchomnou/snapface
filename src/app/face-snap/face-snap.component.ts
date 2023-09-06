import { Component, OnInit, Input } from '@angular/core'; //Ajout Input
import { FaceSnap } from '../model/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  isSnap!: boolean;

  ngOnInit(): void {
    this.isSnap = false;
  }

  onAddSnaps() {
    if (this.isSnap === false) {
      this.faceSnap.snaps++;
      console.log('Oh snaps ==> ' + this.isSnap);
      this.isSnap = true;
    } else {
      this.faceSnap.snaps--;
      console.log('Oops, un Snap ==> ' + this.isSnap);
      this.isSnap = false;
    }
  }
}
