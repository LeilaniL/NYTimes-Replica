import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeaturedArticle } from '../app/featured-articles/models/FeaturedArticle';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nytimes';
  articles: FirebaseListObservable<FeaturedArticle[]>;

  constructor(private router: Router, private db: AngularFireDatabase) {
    this.articles = db.list('/articles');
  };

  topStory = new FeaturedArticle("Trump backs down over shutdown", "government shutdown", "lorem ipsum ipsum", "lorem lorem ipsum ipsum");
  otherStory = new FeaturedArticle("Bad stuff happening in Venezuela", "Venezuela", "lorem ipsum ipsum", "lorem lorem ipsum ipsum");

  featuredStories: any[] = [
  ]
} 