import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'myvotes',
    template: `
        <div class="voter">
            <i 
                class="glyphicon glyphicon-menu-up voter-button" 
                [class.highlighted]="myVote == 1" 
                (click)="upVote()">
            </i>

            <span class="vote-count">{{ voteCount + myVote }}</span>

            <i 
                class="glyphicon glyphicon-menu-down voter-button" 
                [class.highlighted]="myVote == -1" 
                (click)="downVote()">
            </i>
        </div>
    `,
    styles: [`
        .voter-button {
            cursor: pointer;
        }
        .voter {
            width: 20px;
            color: #999;
            text-align: center;
        }
        .highlighted {
            font-weight: bold;
            color: orange;
        }
        .vote-count {
            font-size: 1.2em;
        }
    `]
})

export class MyVotesComponent {
    @Input() voteCount: number = 0;
    @Input() myVote: number = 0;

    @Output() vote: EventEmitter<{}> = new EventEmitter();

    upVote() {
        if (this.myVote == 1) {
            return;
        }
        this.myVote++;
        this.vote.emit({myVote: this.myVote});
    }

    downVote() {
        if (this.myVote == -1) {
            return;
        }
        this.myVote--;
        this.vote.emit({myVote: this.myVote});
    }
}