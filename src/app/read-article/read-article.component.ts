import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../articles.service';
import { FeaturedArticle } from '../featured-articles/models/FeaturedArticle';

@Component({
  selector: 'read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.css'],
  providers: [ArticleService]
})
export class ReadArticleComponent implements OnInit {
  articleId: string;
  articleToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.articleId = urlParameters['id'];
    });
    this.articleToDisplay = this.articleService.getArticleById(this.articleId);
    console.log(this.articleToDisplay);
  }

}
