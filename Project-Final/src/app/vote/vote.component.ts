import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() voteCount: number = 0;
  @Input() myVote: number = 0;
  @Output() vote: EventEmitter<{}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upVote() {
    if (this.myVote == 1) {
      return;
    }
    this.myVote++;
    this.vote.emit({ myVote: this.myVote });
  }

  downVote() {
    if (this.myVote == -1) {
      return;
    }
    this.myVote--;
    this.vote.emit({ myVote: this.myVote });
  }

}
