import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-pictures',
  templateUrl: './share-pictures.component.html',
  styleUrls: ['./share-pictures.component.scss']
})
export class SharePicturesComponent {
  title!: string;
  description!: string;
  createdDate!:Date;
  snaps!: number;
  imageUrl!: string;
  clicked! : boolean;
  buttonText! : string;

  // déclarer  nos variables 
  ngOnInit()
  {
    this.title='Archibald';
    this.description= 'Mon meileur amis depuis tout petit';
    this.createdDate= new Date;
    this.snaps = 6;
    this.imageUrl = 'https://picsum.photos/id/237/200/300';
    this.buttonText = 'oh snap';
  }
  onClickSnap()
  {
    if(this.clicked === false)
    {
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
    }
    else
    {
      this.snaps--;
      this.buttonText = 'oh snap!';
    }
  }
  

}