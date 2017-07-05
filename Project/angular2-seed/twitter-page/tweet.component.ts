import { Component } from 'angular2/core';
import { MyHeartComponent } from '../myheart/myheart.component';

@Component({
    selector: 'tweet',
    template: 'app/twitter-page/tweet.component.html',
    directives: [MyHeartComponent]
})

export class TweetComponent {
	
}