import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/bean/bean';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.scss']
})
export class AllBlogComponent implements OnInit {

  blogs : Array<Blog> = [];

  constructor(private videoService : VideoService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.videoService.getBlogList(-1).then(blogs=>{
      blogs.forEach(v => {
          this.blogs.push({
            heading : v.get('heading'),
            priority : v.get('priority'),
            thumbnail : v.get('thumbnail'),
            blogUrl : v.get('blogUrl'),
            author : v.get('author'),
            authorImage : v.get('authorImage')
          });
      })
    })
  }

}
