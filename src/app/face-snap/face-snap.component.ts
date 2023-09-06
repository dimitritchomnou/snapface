import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  image!: string;

  ngOnInit(): void {
    //Initialisation de nos propriétés
    this.title = 'Dimitri';
    this.description = 'My best friend for all time';
    this.createdDate = new Date();
    this.snaps = 8;
    this.image = 'https://ginou.ci/wp-content/uploads/2023/07/ginou-bleu.png';
  }
}
