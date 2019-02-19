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
  goToDetailPage(story) {
    console.log(story.$key);
    this.router.navigate(['articles', story.$key]);
  }
  // To Do: Show related articles under the same topic. Display the pic, main points, and bigger headline for the most recent article. 

}
