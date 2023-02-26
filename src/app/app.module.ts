import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { SharePicturesComponent } from './share-pictures/share-pictures.component';
import { SharePicturesListComponent } from './share-pictures-list/share-pictures-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleSharePictureComponent } from './single-share-picture/single-share-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    SharePicturesComponent,
    SharePicturesListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleSharePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: 
  [
   {
     provide: LOCALE_ID,
     useValue: 'fr-FR'
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  constructor()
  {
    registerLocaleData(fr.default);
  }
}
