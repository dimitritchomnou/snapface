export class FaceSnap {
  //Autre déclaration
  /* title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    image: string;

    constructor(
      title: string,
      description: string,
      createdDate: Date,
      snaps: number,
      image: string
    ) {
      this.title = title;
      this.description = description;
      this.createdDate = createdDate;
      this.snaps = snaps;
      this.image = image;
  //   }*/

  //autre façon d'implémenter notre constructeur
  constructor(
    public title: string,
    public description: string,
    public createdDate: Date,
    public snaps: number,
    public image: string
  ) {}
}
