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
const routes: Routes = [
  { path: '', component: TestComponent },
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
  { path: 'fnews', component: FnewsComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'eclients', component: EclientsComponent },
  { path: 'factivite', component: FactiviteComponent },
  { path: 'nav', component: NavComponent },
  { path: 'fcertificats', component: FcertificatsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'test', component: TestComponent },
  { path: 'fversion', component: FversionComponent },
  { path: 'frealisation', component: FrealisationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
