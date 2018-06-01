import { Directive, ElementRef, Attribute, Input } from '@angular/core';

@Directive({
	selector: '[bg]'
})
export class BgDirective {

	@Input('bgBorderWidth')
	public bgBorderWidth: string;

	constructor(
		private elementRef: ElementRef,
		@Attribute('bg')
		private bg: string,
		@Attribute('bgBorder')
		private bgBorder: string,
	) { }

	ngOnInit(): void {
		this.elementRef.nativeElement.classList.add(this.bg || 'bg-primary');
		this.elementRef.nativeElement.classList.add(this.bgBorder);
		this.elementRef.nativeElement.classList.add(this.bgBorderWidth)
	}

}
