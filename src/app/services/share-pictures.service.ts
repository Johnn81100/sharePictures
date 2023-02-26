import { Injectable } from "@angular/core";
import { SharePictures } from "../models/share-pictures.model";

@Injectable({
    providedIn: 'root'
})

export class SharePicturesService {
    sharePictures: SharePictures[] =
        [

            {
                id: 1,
                title: 'Archibald',
                description: 'Mon meileur amis depuis tout petit',
                imageUrl: 'https://picsum.photos/id/237/200/300',
                createdDate: new Date,
                snaps: 6,
                location: 'Paris'
            },

            {
                id: 2,
                title: 'bald',
                description: 'Mon meileur amis ',
                imageUrl: 'https://picsum.photos/id/237/200/300',
                createdDate: new Date,
                snaps: 25,
            },

            {
                id: 3,
                title: 'Archi',
                description: 'Depuis tout petit',
                imageUrl: 'https://picsum.photos/id/237/200/300',
                createdDate: new Date,
                snaps: 255,
                location: 'la montagne'
            },
            {
                id: 4,
                title: 'Archibald',
                description: 'Mon meileur amis depuis tout petit',
                imageUrl: 'https://picsum.photos/id/237/200/300',
                createdDate: new Date,
                snaps: 150,
                location: 'Paris'
            },

            {
                id: 5,
                title: 'bald',
                description: 'Mon meileur amis ',
                imageUrl: 'https://picsum.photos/id/237/200/300',
                createdDate: new Date,
                snaps: 100,
            },

            {
                id: 6,
                title: 'Archi',
                description: 'Depuis tout petit',
                imageUrl: 'https://picsum.photos/id/237/200/300',
                createdDate: new Date,
                snaps: 175,
                location: 'la montagne'
            },
        ];

    getAllSharePictures(): SharePictures[] {
       return this.sharePictures;
    }

    getSharePicturesId(sharePicturesid: number): SharePictures {
        const sharePictures = this.sharePictures.find(sharePictures => sharePictures.id === sharePicturesid);
        if (!sharePictures) {
            throw new Error('SharePictures not found!');
        }
        else {
            return sharePictures
        }

    }
    sharePicturesSnappById(sharePicturesid: number, snapType: 'snap' | 'unsnap'): void {
        const sharePictures = this.getSharePicturesId(sharePicturesid)
        snapType === 'snap' ? sharePictures.snaps++ : sharePictures.snaps--
    }
   
}