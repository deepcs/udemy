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
  slider: any;
  pushArray: Course[] = [];

  constructor(private CourseServiceService: CourseServiceService) { }

  ngOnInit(): void {
    this.CourseServiceService.getCourses()
      .then(results => {
        this.courses = results;
        this.slider =[];
        for(let i=0; i<results.length; i= i+4) {
          this.pushArray = [results[i], results[i+1], results[i+2], results[i+3]];
          this.slider.push(this.pushArray);
        }
      });
  }
}
