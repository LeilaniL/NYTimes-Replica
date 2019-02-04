import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FeaturedArticle } from '../app/featured-articles/models/FeaturedArticle';
import { FeaturedArticleComponent } from '../app/featured-articles/featured-articles.component';
import { ReadArticleComponent } from '../app/read-article/read-article.component';

const appRoutes: Routes = [
  // {
  //     path: '',
  //     component: HomepageComponent
  // },
  {
    path: 'read-article',
    component: ReadArticleComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);