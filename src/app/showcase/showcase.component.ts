import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior:"smooth"}); 
  }

}
