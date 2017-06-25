import {Component, Input, Output, EventEmitter} from 'angular2/core';
import { CoursesComponent } from './courses.component'
import { AuthorsComponent } from './authors.component'

@Component({
    selector: 'mystar',
    template: `
        <i class="glyphicon" [class.glyphicon-star]="!isFavorite" [class.glyphicon-star-empty]="isFavorite" (click)="onClick()"></i>
        `,
    directives: [CoursesComponent, AuthorsComponent]
})

export class MyStarComponent {
    @Input() isFavorite = false;

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}