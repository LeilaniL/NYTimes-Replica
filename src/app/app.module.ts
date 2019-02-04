import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { FeaturedArticleComponent } from './featured-articles/featured-articles.component';
import { ReadArticleComponent } from './read-article/read-article.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedArticleComponent,
    ReadArticleComponent
  ],
  imports: [
    BrowserModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
