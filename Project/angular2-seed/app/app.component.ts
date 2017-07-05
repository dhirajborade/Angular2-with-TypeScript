import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { MyStarComponent } from './/mystar.component';
import { MyHeartComponent } from './myheart.component';
import { MyVotesComponent } from './myvotes.component';
import { TweetComponent } from './tweet.component';
import { TweetService } from './tweet.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CoursesComponent, AuthorsComponent, MyStarComponent, MyHeartComponent, MyVotesComponent, TweetComponent],
    providers: [TweetService]
})

export class AppComponent {

    tweets: any[];

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }

    post = {
        title: "Title",
        isFavorite: true,
        isLiked: false
    }

    onFavoriteChange($event) {
        console.log($event);
    }

    tweet = {
        title: "Title",
        isLiked: false,
        totalLikes: 10
    }

    onLikesChange($event) {
        console.log($event);
    }

    votes = {
        title: "Title",
        myVote: 0,
        totalVotes: 10
    }

    onVotesChange($event) {
        console.log($event);
    }
}