import { Component, OnInit, Input } from '@angular/core'; //Ajout Input
import { FaceSnap } from '../model/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  isSnap!: boolean;
  villeName!: String;

  //Injection du service
  constructor(
    private faceSnapService: FaceSnapsService,
    private routeActive: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.isSnap = false;
    this.villeName = 'Paris';
  }

  onAddSnaps() {
    if (this.isSnap === false) {
      this.faceSnapService.addSnapFace(this.faceSnap.id, 'snap');
      console.log('Oh snaps ==> ' + this.isSnap);
      this.isSnap = true;
    } else {
      this.faceSnapService.addSnapFace(this.faceSnap.id, 'unsnap');
      console.log('Oops, un Snap ==> ' + this.isSnap);
      this.isSnap = false;
    }
  }

  snapFaceView() {
    this.route.navigateByUrl(`facesnap/${this.faceSnap.id}`);
  }
}
