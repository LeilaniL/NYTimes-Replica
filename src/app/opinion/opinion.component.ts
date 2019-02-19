import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../articles.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css'],
  providers: [ArticleService]
})
export class OpinionComponent implements OnInit {
  featuredOpinions: FirebaseListObservable<any[]>;

  constructor(private router: Router, private service: ArticleService) { }

  ngOnInit() {
    // To Do: hard code opinion headlines etc. or add new database
    // this.featuredOpinions = this.service.getOpinions();
  }
}
