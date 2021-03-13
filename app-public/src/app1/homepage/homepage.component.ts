import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  courses: Course[] = [];

  constructor(private CourseServiceService: CourseServiceService) { }

  ngOnInit(): void {
    this.CourseServiceService.getCourses()
      .then(results => {
        this.courses = results;
      });
  }
}
