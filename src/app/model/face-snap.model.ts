export class FaceSnap {
  //Autre déclaration
  /* title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    image: string;
    location?: String

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
  /*constructor(
    public title: string,
    public description: string,
    public createdDate: Date,
    public snaps: number,
    public image: string,
    public location?: String
  ) {}*/

  //Autre déclaration sans utilisé un constructeur
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  image!: string;
  location?: String; //propriété optionnelle
}
