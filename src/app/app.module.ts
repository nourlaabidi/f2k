import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { PresentationComponent } from './presentation/presentation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ContactusComponent } from './contactus/contactus.component';
import { RealisationComponent } from './realisation/realisation.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FpresentationComponent } from './fpresentation/fpresentation.component';
import { FserviceComponent } from './fservice/fservice.component';
import { FcontactComponent } from './fcontact/fcontact.component';
import { FgalleryComponent } from './fgallery/fgallery.component';
import { ErealisationComponent } from './erealisation/erealisation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    NewsComponent,
    PresentationComponent,
    GalleryComponent,
    ContactusComponent,
    RealisationComponent,
    AcceuilComponent,
    FpresentationComponent,
    FserviceComponent,
    FcontactComponent,
    FgalleryComponent,
    ErealisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
