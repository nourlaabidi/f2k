import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GalleryComponent } from './gallery/gallery.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { FgalleryComponent } from './fgallery/fgallery.component';
import { ErealisationComponent } from './erealisation/erealisation.component';

import { TestComponent } from './test/test.component';
import { FversionComponent } from './fversion/fversion.component';
import { FrealisationComponent } from './frealisation/frealisation.component';
import { AchivmentsComponent } from './achivments/achivments.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    FgalleryComponent,
    ErealisationComponent,
    TestComponent,
    FversionComponent,
    FrealisationComponent,
    AchivmentsComponent,
  
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
