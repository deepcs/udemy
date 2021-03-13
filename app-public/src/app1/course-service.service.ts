import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  private readonly baseUrl = 'http://localhost:3000';
  private coursesUrl = 'http://localhost:3000/api/courses';

  constructor(private http: HttpClient) { }

  getCourses()
    {
        return this.http.get(`${this.coursesUrl}`)
            .pipe(map((courses: Course[]) => courses)).toPromise();
    }

  getSingleCourse(courseId:string):Promise<void|Course>
    {return this.http.get(this.coursesUrl + '/'+courseId)
    .toPromise()
    .then(response => response as Course)
    .catch(this.handleError);
  }

  createCourse(newCourse:Course): Promise<void | Course>
  {return this.http.post(this.coursesUrl, newCourse)
    .toPromise()
    .then(response=>response as Course)
    .catch(this.handleError);
  }

  deleteCourse(courseId: string): Promise<void | Course>{
    if(confirm("Are you sure you want to delete this!")){
    return this.http.delete(this.coursesUrl + '/' + courseId)
    .toPromise()
    .then(response => response as Course)
    .catch(this.handleError);
    }
  }

  updateCourse(newCourse: Course): Promise<void | Course>{
    var upUrl = this.coursesUrl+ '/' + newCourse._id;
    return this.http.put(upUrl, newCourse)
    .toPromise()
    .then(response => response as Course)
    .catch(this.handleError);
  }

  private handleError(error: any){
    console.log("error");
  }
}
