import { Component, Input } from 'angular2/core';
import { MyHeartComponent } from './myheart.component';

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.component.html',
    styleUrls: ['app/tweet.component.css'],
    directives: [MyHeartComponent],
})

export class TweetComponent {
	@Input() data;
    constructor() {
        console.log(this.data);
    }
}