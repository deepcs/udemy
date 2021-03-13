import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseServiceService } from '../course-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CourseServiceService]
})
export class CreateComponent implements OnInit {
  public newCourse: Course = {
    _id: '',
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
  };

  constructor(private CourseServiceService: CourseServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  public createNewCourse(newCourse: Course): void{
      
   // debugger;
    this.CourseServiceService.createCourse(newCourse)
      .then(response => {
        this.newCourse = response as Course;
    });

    this.router.navigate(['']);
  }
}
