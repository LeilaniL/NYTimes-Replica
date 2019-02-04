import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../articles.service';

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
  }

}



// export class AlbumDetailComponent implements OnInit {
//   albumId: string;
//   albumToDisplay;

//   constructor(private route: ActivatedRoute, private location: Location, private albumService: AlbumService) { }

//   ngOnInit() {
//     this.route.params.forEach((urlParameters) => {
//       this.albumId = urlParameters['id'];
//     });
//     this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
//   }

// }