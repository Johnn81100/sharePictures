import { Component} from '@angular/core';
import { SharePictures } from '../models/share-pictures.model';
import { SharePicturesService } from '../services/share-pictures.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-single-share-picture',
  templateUrl: './single-share-picture.component.html',
  styleUrls: ['./single-share-picture.component.scss']
})
export class SingleSharePictureComponent {
    
  sharePictures!: SharePictures;
  buttonText!: string;

  constructor(
    private sharePicturesService: SharePicturesService,
    private route: ActivatedRoute
    ) { }


  // déclarer  nos variables 
  ngOnInit() {
    this.buttonText = 'oh snap!';
    const sharePicturesId = +this.route.snapshot.params['id'];
    this.sharePictures = this.sharePicturesService.getSharePicturesId(sharePicturesId);
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

}
