import { Component } from '@angular/core';
import { TweetService } from "./tweet/tweet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    title = 'My Angular App';
    tweets: any[];
    post = {
        title: 'Title',
        isFavorite: true,
        isLiked: false
    };
    tweet = {
        title: 'Title',
        isLiked: false,
        totalLikes: 10
    };
    votes = {
        title: 'Title',
        myVote: 0,
        totalVotes: 10
    };
    
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
    
    onFavoriteChange($event) {
        console.log($event);
    }
    
    onLikesChange($event) {
        console.log($event);
    }
    
    onVotesChange($event) {
        console.log($event);
    }
}
