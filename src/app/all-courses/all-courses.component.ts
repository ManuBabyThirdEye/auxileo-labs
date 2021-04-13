import { Component, OnInit } from '@angular/core';
import { Course } from 'src/bean/bean';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {

  courses : Array<Course>;

  constructor(private videoService : VideoService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.courses = [];
    this.videoService.getCourseList(5).then(courses=>{
      courses.forEach(v => {
          this.courses.push({
            description : v.get('description'),
            name : v.get('name'),
            priority : v.get('priority'),
            topics : v.get('topics'),
            imageLink : v.get('imageLink'),
            duration : v.get('duration'),
            courseId : v.id
          });
      })   
      console.log(this.courses);
         
    })
  }

}
