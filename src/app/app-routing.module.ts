import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { PresentationComponent } from './presentation/presentation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RealisationComponent } from './realisation/realisation.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FpresentationComponent } from './fpresentation/fpresentation.component';
import { FserviceComponent } from './fservice/fservice.component';
import { FcontactComponent } from './fcontact/fcontact.component';
import { FgalleryComponent } from './fgallery/fgallery.component';
import { ErealisationComponent } from './erealisation/erealisation.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'realisation', component: RealisationComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'fpresentation', component: FpresentationComponent },
  { path: 'fservice', component: FserviceComponent },
  { path: 'fcontact', component: FcontactComponent },
  { path: 'fgallery', component: FgalleryComponent },
  { path: 'erealisation', component: ErealisationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
