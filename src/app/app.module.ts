import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedArticlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
