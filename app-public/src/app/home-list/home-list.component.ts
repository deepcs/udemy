import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseServiceService } from '../course-service.service';
import{ ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  courses: Course[] = [];

  constructor(private CourseServiceService: CourseServiceService, private router: Router) { }

  ngOnInit(): void {
    this.CourseServiceService.getCourses()
      .then(results => {
        this.courses = results;
      });
  }

  counter(i: number) {
    return new Array(i);
  }

  convertDate(dateStr) {
    return new Date(dateStr).toDateString();
  }

  public deleteCourse(courseId: string): void{
    this.CourseServiceService.deleteCourse(courseId);
    this.router.navigateByUrl('#');
  }

}
