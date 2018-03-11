import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.css']
})
export class AttributionComponent implements OnInit {

  @Input() public author = 'Someone';
  
  constructor() { }

  ngOnInit() {
  }

}
