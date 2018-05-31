import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

	public currentDate = new Date();
	public title = `Presidential Candidates Respond to
  Allegations Involving Ability to Dunk`;
	public shareCount = 0;
	public wordCount = 0;
	public likes = 0;
	public myArray = [1, 2, 3, 4];

	// Ahora tenemos acceso al hijo desde el padre:
	@ViewChild(FeedbackComponent)
	public feedbackComponent: FeedbackComponent;

	updateWordCount(event: number): void {
		this.wordCount = event;
	}

	share(event: Event): void {
		this.shareCount += 1;
	}

	like(): void {
		this.likes += 1;
	}

}
