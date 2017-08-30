import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WikiSearchService } from './services/wiki-search.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [WikiSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
