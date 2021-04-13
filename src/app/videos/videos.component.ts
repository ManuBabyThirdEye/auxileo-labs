import { Component, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service'
import { Video } from '../../bean/bean'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos : Array<Video> = [];
  showMore : boolean = false;

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
    this.videoService.getVideoList(5).then(videos=>{
      this.showMore = videos.size > 4 ;
      let i = 0;
      videos.forEach(v => {
        if(i<4){
          this.videos.push({
            description : v.get('description'),
            heading : v.get('heading'),
            priority : v.get('priority'),
            thumbnail : v.get('thumbnail'),
            topic : v.get('topic'),
            videoLink : v.get('videoLink'),
            author : v.get('author')
          });
        }
        i++;
      })
      console.log(this.videos);

    })
  }

  open(content,video) { 
    this.id = video.videoLink;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => { 
    }, (reason) => { 
    }); 
  } 

}
