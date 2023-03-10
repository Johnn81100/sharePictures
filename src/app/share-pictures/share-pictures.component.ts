import { Component, OnInit, Input } from '@angular/core';
import { SharePictures } from '../models/share-pictures.model';
import { SharePicturesService } from '../services/share-pictures.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-share-pictures',
  templateUrl: './share-pictures.component.html',
  styleUrls: ['./share-pictures.component.scss']
})

export class SharePicturesComponent {
  
  @Input() sharePictures!: SharePictures;
  buttonText!: string;

  constructor(
    private sharePicturesService: SharePicturesService,
    private router: Router,   
  ) { }


  // déclarer  nos variables 
  ngOnInit() {
    this.buttonText = 'oh snap!';
    
  }
  onClickSnap() {
    if (this.buttonText === 'oh snap!') {
      this.sharePicturesService.sharePicturesSnappById(this.sharePictures.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    }
    else {
      this.sharePicturesService.sharePicturesSnappById(this.sharePictures.id, 'unsnap');
      this.buttonText = 'oh snap!';
    }
  }
  onViewSharePicture(){
    
    this.router.navigateByUrl(`sharePictures/${this.sharePictures.id}`);
  }
  
}