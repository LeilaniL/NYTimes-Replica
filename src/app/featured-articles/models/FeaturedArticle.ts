export class FeaturedArticle {
  bodyText: string;
  picture: string;
  whenPublished: Date;

  constructor(public headline: string, public topic: string, public mainpoint1: string, public mainpoint2: string, public body: string) { }
}
// To Do: Add timestamp for when article published