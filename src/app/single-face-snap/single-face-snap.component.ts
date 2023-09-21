import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../model/face-snap.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapCopoment implements OnInit {
  //@Input() faceSnap!: FaceSnap;
  faceSnap!: FaceSnap;

  isSnap!: boolean;
  villeName!: String;

  //Injection du service et de activatedRoute pour recupérer la
  //la route activée
  constructor(
    private faceSnapService: FaceSnapsService,
    private routeActive: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.isSnap = false;
    this.villeName = 'Paris';
    //recupérons le param id  via le snapshot
    // Le + au début permet de le cast un string en number
    const snapId = +this.routeActive.snapshot.params['id'];
    //On recupere un facesnap à partir de son id
    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
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
  onView() {
    const snapId = +this.routeActive.snapshot.params['id'];
    this.route.navigateByUrl('facesnap/{snapId}');
  }
}
