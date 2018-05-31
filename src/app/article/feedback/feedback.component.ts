/* Referencing a parent component from a child
component (Por ejemplo, para llamar a uno de sus metodos) */

import { Component, OnInit, Input, Inject, forwardRef } from '@angular/core';
import { ArticleComponent } from '../article.component';

@Component({
	selector: 'app-feedback',
	templateUrl: './feedback.component.html',
	styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

	@Input()
	public val: number = 0;

	// Aqui controlamos que las dependencias funcionen correctamente:
	// Al existir una dependecia circular: padre llama al hijo y visceversa.
	constructor(
		@Inject(forwardRef(() => ArticleComponent))
		private articleComponent: ArticleComponent
	) { }

	ngOnInit() {
	}

	like(): void {
		this.articleComponent.like();
	}

}
