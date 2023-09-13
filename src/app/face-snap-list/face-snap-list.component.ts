import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnapList!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapsService) {}

  ngOnInit(): void {
    //Call data service
    //this.faceSnapList = this.faceSnapService.faceSnaps;
    this.faceSnapList = this.faceSnapService.getAllSnaps();
  }
}
