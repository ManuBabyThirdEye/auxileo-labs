import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/bean/bean';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs : Array<Blog> = [];
  showMore : boolean = false;

  constructor(private videoService : VideoService) { }

  ngOnInit(): void {
    this.videoService.getBlogList(4).then(blogs=>{
      this.showMore = blogs.size > 4 ;
      let i = 0;
      blogs.forEach(v => {
        if(i<4){
          this.blogs.push({
            heading : v.get('heading'),
            priority : v.get('priority'),
            thumbnail : v.get('thumbnail'),
            blogUrl : v.get('blogUrl'),
            author : v.get('author'),
            authorImage : v.get('authorImage')
          });
        }
        i++;
      })
    });
  }

}
