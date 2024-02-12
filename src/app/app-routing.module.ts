import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { FgalleryComponent } from './fgallery/fgallery.component';
import { ErealisationComponent } from './erealisation/erealisation.component';
import { FrealisationComponent } from './frealisation/frealisation.component';
import { TestComponent } from './test/test.component';
import { FversionComponent } from './fversion/fversion.component';

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'fgallery', component: FgalleryComponent },
  { path: 'erealisation', component: ErealisationComponent },
  { path: 'test', component: TestComponent },
  { path: 'fversion', component: FversionComponent },
  { path: 'frealisation', component: FrealisationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
