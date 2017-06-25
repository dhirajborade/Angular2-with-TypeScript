import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component'
import { AuthorsComponent } from './authors.component'
import { MyStarComponent } from './mystar.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <courses></courses>
        <authors></authors>
        <mystar [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></mystar>
        `,
    directives: [CoursesComponent, AuthorsComponent, MyStarComponent]
})

export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event) {
        console.log($event);
    }
}