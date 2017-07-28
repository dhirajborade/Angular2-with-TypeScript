import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() iLiked = false;
  @Input() numberOfLikes = 0;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.iLiked = !this.iLiked;
    this.numberOfLikes += this.iLiked ? 1 : -1;
    this.change.emit({ newValue: this.iLiked });
  }
}
