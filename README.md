# Headline News: Technical Test

### Instructions

We were given four days to work on this tech test with the following instructions.

> Build a website that shows a list of news headlines from Financial Times. You may use our Developer APIs to achieve this.
>
> Provide a search box for users to search for headlines containing specific words (i.e. searching for "brexit" should return a list of brexit-related headlines).
>
> Optionally, provide pagination for results, at 20 results per page.
>
> This website should be:
> * Server-rendered
> * Progressively enhanced
> * Responsive
> * Accessible
>
> For bonus points, the site should:
> * Be built using Javascript and node.js
> * Be deployed on Heroku
> * Not rely too heavily on client-side frameworks (i.e. Angular, React) or libraries like jQuery
> * Have a similar look and feel as ft.com
> * Be performant over 3G networks
>
> It'd be really awesome if, on top of all that, your site:
> * Uses Origami Components
> * Works offline

### Using my app

* You can view the app online at [headline-news.herokuapp.com](https://headline-news.herokuapp.com/)

### Running the tests

* Download the source for using `$ git clone`
* Navigate into the root directory in the command line using `$ cd headline-news`
* Run `$ npm install` to install the dependencies
* Run `$ npm test` to run the tests

Note that you will need to have Node installed first. You can install this following the instructions [here](https://nodejs.org/en/)

**Note that tests were all passing and should still pass but introducing the pagination logic slowed down the application so the tests are now timing out.**
