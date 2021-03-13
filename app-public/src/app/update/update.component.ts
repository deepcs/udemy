import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseServiceService } from '../course-service.service';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [CourseServiceService]
})
export class UpdateComponent implements OnInit {
  constructor(private CourseServiceService: CourseServiceService, private route:ActivatedRoute, private router: Router) { }
  
  newCourse: Course;
  pageData = {
    header: {
      title: '',
      subtitle: '',
      bannerImage: '',
      author: '',
      category: '',
      price: 0,
      rating: 0,
      description: '',
      createdOn: new Date(),
      content: [{
        mainTitle: '',
        sub1: '',
        sub2: '',
        sub3: ''
      }]
    }
  }
  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.CourseServiceService.getSingleCourse(params.courseid);
    }))
    .subscribe((newCourse: Course) => {
      console.log("current Course", newCourse);
      this.newCourse = newCourse;
      this.pageData.header.title = newCourse.title;
      this.pageData.header.subtitle = newCourse.subtitle;
      this.pageData.header.bannerImage = newCourse.bannerImage;
      this.pageData.header.author = newCourse.author;
      this.pageData.header.category = newCourse.category;
      this.pageData.header.price = newCourse.price;
      this.pageData.header.rating = newCourse.rating;
      this.pageData.header.description = newCourse.description;
      this.pageData.header.createdOn = newCourse.createdOn;
    });
  }
  public updateCourse(newCourse: Course): void{
    console.log("update", newCourse);
    //debugger;
    this.CourseServiceService.updateCourse(newCourse);
    this.router.navigateByUrl('');
  }

}
