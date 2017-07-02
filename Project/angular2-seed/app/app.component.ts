import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component'
import { AuthorsComponent } from './authors.component'
import { MyStarComponent } from './mystar.component'
import { MyHeartComponent } from './myheart.component'
import { MyVotesComponent } from './myvotes.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <courses></courses>
        <authors></authors>
        <mystar [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></mystar>
        <myheart [numberOfLikes]="tweet.totalLikes" [iLiked]="tweet.isLiked" (change)="onLikesChange($event)"></myheart>
        <myvotes [voteCount]="votes.totalVotes" [myVote]="votes.myVote" (vote)="onVotesChange($event)" ></myvotes>
        `,
    directives: [CoursesComponent, AuthorsComponent, MyStarComponent, MyHeartComponent, MyVotesComponent]
})

export class AppComponent {
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