import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public currentDate = new Date();
  public title = `Presidential Candidates Respond to
  Allegations Involving Ability to Dunk`;
  public shareCount = 0;
  public wordCount = 0;
  public myArray = [1, 2, 3, 4];

  ngOnInit() {
    
  }

  updateWordCount(event: number): void {
    this.wordCount = event;
  }
  
  share(event: Event): void {
    this.shareCount += 1;
  }

}
