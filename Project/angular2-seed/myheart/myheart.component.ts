import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'myheart',
    template: `
        <i 
            class="glyphicon glyphicon-heart" 
            [class.highlighted]="iLiked" 
            (click)="onClick()">
        </i>
        <span>{{ numberOfLikes }}</span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .highlighted {
            color: deeppink;
        }
    `]
})

export class MyHeartComponent {
    @Input() iLiked = false;
    @Input() numberOfLikes = 0 ;

    @Output() change = new EventEmitter();

    onClick() {
        this.iLiked = !this.iLiked;
        this.numberOfLikes += this.iLiked ? 1 : -1;
        this.change.emit({newValue: this.iLiked});
    }
}