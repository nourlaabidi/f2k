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
import { FnewsComponent } from './fnews/fnews.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ClientsComponent } from './clients/clients.component';
import { EclientsComponent } from './eclients/eclients.component';
import { FactiviteComponent } from './factivite/factivite.component';
import { NavComponent } from './nav/nav.component';
import { FcertificatsComponent } from './fcertificats/fcertificats.component';
import { ActivitiesComponent } from './activities/activities.component';
import { TestComponent } from './test/test.component';
import { FversionComponent } from './fversion/fversion.component';
import { FrealisationComponent } from './frealisation/frealisation.component';

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
    ErealisationComponent,
    FnewsComponent,
    CertificatesComponent,
    ClientsComponent,
    EclientsComponent,
    FactiviteComponent,
    NavComponent,
    FcertificatsComponent,
    ActivitiesComponent,
    TestComponent,
    FversionComponent,
    FrealisationComponent,
  
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
