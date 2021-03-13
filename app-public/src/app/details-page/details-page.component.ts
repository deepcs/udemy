import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseServiceService } from '../course-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [CourseServiceService]
})
export class DetailsPageComponent implements OnInit {
  currentCourse: Course;
  currentCourseDesc: String[];

  constructor(private CourseServiceService: CourseServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.CourseServiceService.getSingleCourse(params.courseid);
    }))
      .subscribe((newCourse: Course) => {
        this.currentCourse = newCourse;
        this.currentCourseDesc = newCourse.description.split("#");
      });
  }

  counter(i: number) {
    return new Array(i);
  }

  convertDate(dateStr) {
    return new Date(dateStr).toDateString();
  }
}
