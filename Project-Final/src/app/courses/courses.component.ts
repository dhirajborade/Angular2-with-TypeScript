import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title: string = "List of Courses";
  courses: string[];
  myCourse: string;
  
  constructor(courseService: CoursesService) {
    this.courses = courseService.getCourses();
  }
  
  ngOnInit() { }

}
