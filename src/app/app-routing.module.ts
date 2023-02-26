import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SharePicturesListComponent } from "./share-pictures-list/share-pictures-list.component";
import { SingleSharePictureComponent } from "./single-share-picture/single-share-picture.component";


const routes : Routes =[
   { path: '', component: LandingPageComponent},
   { path: 'sharePictures', component: SharePicturesListComponent},
   { path: 'sharePictures/:id', component: SingleSharePictureComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}
