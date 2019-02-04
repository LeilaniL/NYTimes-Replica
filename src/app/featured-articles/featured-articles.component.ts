import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeaturedArticle } from './models/FeaturedArticle';
import { ArticleService } from '../articles.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'featured-articles',
  templateUrl: './featured-articles.component.html',
  styleUrls: ['./featured-articles.component.css'],
  providers: [ArticleService]
})
export class FeaturedArticleComponent implements OnInit {
  featuredStories: FirebaseListObservable<any[]>;

  constructor(private router: Router, private service: ArticleService) {
  };

  ngOnInit() {
    this.featuredStories = this.service.getArticles();
  }
  // topStory = new FeaturedArticle("Trump backs down over shutdown", "government shutdown", "lorem ipsum ipsum", "lorem lorem ipsum ipsum");
  // otherStory = new FeaturedArticle("Bad stuff happening in Venezuela", "Venezuela", "lorem ipsum ipsum", "lorem lorem ipsum ipsum");

}
