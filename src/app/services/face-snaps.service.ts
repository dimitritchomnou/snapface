import { Injectable } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  //Snaps datas in to service
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Yaya Dima',
      description: 'My best friend for all time',
      createdDate: new Date(),
      snaps: 0,
      image: 'https://ginou.ci/wp-content/uploads/2023/07/ginou-bleu.png',
      location: 'Luxembourg',
    },
    {
      id: 2,
      title: 'Yaya Philiph',
      description: 'My best friend for all time',
      createdDate: new Date(),
      snaps: 206,
      image: 'https://ginou.ci/wp-content/uploads/2023/07/Vuejs.jpg',
    },
    {
      id: 3,
      title: 'Yaya Philiph',
      description: 'My best friend for all time',
      createdDate: new Date(),
      snaps: 4,
      image: 'https://ginou.ci/wp-content/uploads/2023/07/react.png',
      location: 'Paris',
    },
  ];

  getAllSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  AddSnapFace(faceSnapId: number, isSnap: 'snap' | 'unsnap'): void {
    try {
      const faceSnap = this.faceSnaps.find((item) => item.id === faceSnapId);
      if (faceSnap) {
        if (isSnap === 'snap') {
          console.log('Value increment, id ==>' + faceSnapId);
          faceSnap.snaps++;
        } else {
          console.log('Value decrement id ==>');
          faceSnap.snaps--;
        }
      }
    } catch (error) {
      console.error('FaceSnap not found !!!', error);
    }
  }
}
