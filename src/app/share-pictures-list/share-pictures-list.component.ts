import { Component } from '@angular/core';
import { SharePictures } from '../models/share-pictures.model';
import { SharePicturesService } from '../services/share-pictures.service';

@Component({
  selector: 'app-share-pictures-list',
  templateUrl: './share-pictures-list.component.html',
  styleUrls: ['./share-pictures-list.component.scss']
})
export class SharePicturesListComponent {

  sharePictures!: SharePictures[];

  constructor(private SharePicturesService : SharePicturesService){}

  ngOnInit() {
    this.sharePictures = this.SharePicturesService.sharePictures; 
  }
}
