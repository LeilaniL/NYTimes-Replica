# Nytimes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Specs
On the homepage:
- Header displays logo, current date, weather, and options to subscribe or log in

- Menu (hamburger icon) displays list of sections

- Skybox(?) links to newsletters and podcasts

-Top news packages contain:
  -3 articles of the same topic (e.g. "Government Shutdown", "Super Bowl")
  -When article was last updated
  -The most recent article is highlighted, including an image and two bullet points

-Opinion pieces display the headline and author's name

- Thick horizontal lines separate topics/packages

- Thin gray lines separate related stories within the package

If you click on a top news article, the detail page displays:
-Headline, large image, date published, byline, and body text
-A list of comments
-Users can add (and edit or delete) their comments
