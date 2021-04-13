import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-about',
  templateUrl: './more-about.component.html',
  styleUrls: ['./more-about.component.scss']
})
export class MoreAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
