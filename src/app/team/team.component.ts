import { Component, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service';
import { Course } from '../../bean/bean'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  courses : Array<Course>;
  showMore : boolean = false;
  queryParams = {courseId : 'BroIt1SQkyjQKDsFbggQ'}
  constructor(private videoService : VideoService) { }

  ngOnInit(): void {
    this.courses = [];
    this.videoService.getCourseList(5).then(courses=>{
      this.showMore = courses.size > 4 ;
      let i = 0;
      courses.forEach(v => {
        if(i<4){
          this.courses.push({
            description : v.get('description'),
            name : v.get('name'),
            priority : v.get('priority'),
            topics : v.get('topics'),
            imageLink : v.get('imageLink'),
            duration : v.get('duration'),
            courseId : v.id
          });
        }
        i++;
      })      
    })
  }

}
