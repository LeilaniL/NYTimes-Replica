import { Component } from '@angular/core';
import { FeaturedArticle } from '../app/featured-articles/models/FeaturedArticle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nytimes';

  topStory = new FeaturedArticle("Trump backs down over shutdown", "government shutdown", "lorem ipsum ipsum", "lorem lorem ipsum ipsum");
  otherStory = new FeaturedArticle("Bad stuff happening in Venezuela", "Venezuela", "lorem ipsum ipsum", "lorem lorem ipsum ipsum");

  featuredStories: FeaturedArticle[] = [
    this.topStory, this.otherStory
  ]
}