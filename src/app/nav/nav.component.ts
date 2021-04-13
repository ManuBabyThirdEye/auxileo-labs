import { Component, OnInit, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() showLinks : boolean;

  showLinkInteral : boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.showLinkInteral = this.showLinks;
  }

  @HostListener('window:scroll', [])  
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('nav').classList.add('menu-bg');
    }else{
      document.getElementById('nav').classList.remove('menu-bg');
    }
  }

}
