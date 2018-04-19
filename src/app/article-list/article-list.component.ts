import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public articles: Array<Object> = [
    { title: 'Foo', active: true },
    { title: 'Bar', active: false },
    { title: 'Baz', active: true },
  ];
  constructor() { }

  ngOnInit() {
  }

}
