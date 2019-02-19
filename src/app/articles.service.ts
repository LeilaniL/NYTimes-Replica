import { Injectable } from '@angular/core';
import { FeaturedArticle } from './featured-articles/models/FeaturedArticle';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }
  getArticles() {
    return this.articles;
  }
  getArticleById(id: string) {
    return this.database.object('articles/' + id);
  }
  // To Do: getArticlesByTopic() for related articles
}