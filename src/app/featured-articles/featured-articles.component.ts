import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'featured-articles',
  templateUrl: './featured-articles.component.html',
  styleUrls: ['./featured-articles.component.css']
})
export class FeaturedArticleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
