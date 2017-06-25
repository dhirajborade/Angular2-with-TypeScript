import { Component } from 'angular2/core'
import { CoursesService} from './courses.service'
import { AutoGrowDirective } from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow [(ngModel)]="myCourse"/>
        <ul>
            <li *ngFor="#course of courses">
            {{ course }}
            </li>
            <li *ngIf="myCourse">{{ myCourse }}</li>
        </ul>
        `,
    directives: [AutoGrowDirective],
    providers: [CoursesService]
})

export class CoursesComponent {
    title: string = "The title of courses page";
    courses: string[];
    myCourse: string;

    constructor(courseService: CoursesService) {
        this.courses = courseService.getCourses();
    }
}