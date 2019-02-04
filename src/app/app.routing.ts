import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FeaturedArticleComponent } from '../app/featured-articles/featured-articles.component';
import { ReadArticleComponent } from '../app/read-article/read-article.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FeaturedArticleComponent
  },
  {
    path: 'articles/:id',
    component: ReadArticleComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);