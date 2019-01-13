import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes/heroes.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';



@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,

    HeroesComponent,
    CatsComponent,
    DogsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
