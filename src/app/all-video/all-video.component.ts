import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Video } from 'src/bean/bean';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-all-video',
  templateUrl: './all-video.component.html',
  styleUrls: ['./all-video.component.scss']
})
export class AllVideoComponent implements OnInit {

  videos : Array<Video> = [];
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';
 
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
  constructor(private modalService: NgbModal, private videoService : VideoService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.videoService.getVideoList(-1).then(videos=>{
      videos.forEach(v => {
        this.videos.push({
          description : v.get('description'),
          heading : v.get('heading'),
          priority : v.get('priority'),
          thumbnail : v.get('thumbnail'),
          topic : v.get('topic'),
          videoLink : v.get('videoLink'),
          author : v.get('author')
        });
      })
    })
  }

  open(content,video) { 
    this.id = video.videoLink;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => { 
    }, (reason) => { 
    }); 
  } 

}
