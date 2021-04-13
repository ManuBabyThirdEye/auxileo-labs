import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/bean/bean';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {

  courseId : string;
  course : Course;

  constructor(private route: ActivatedRoute, private videoService : VideoService) {
    this.route.queryParams.subscribe(params => {
      if(params.courseId){
        this.courseId = params.courseId;
      }
    });
  }

  ngOnInit(): void {
    window.scroll(0,0);
    this.videoService.getCourseById(this.courseId).subscribe(course => {      
      this.course = {
        courseId : course.payload.id,
        description : course.payload.get('description'),
        duration : course.payload.get('duration'),
        imageLink : course.payload.get('imageLink'),
        name : course.payload.get('name'),
        priority : course.payload.get('priority'),
        topics : course.payload.get('topics')
      }
    })
  }

}
