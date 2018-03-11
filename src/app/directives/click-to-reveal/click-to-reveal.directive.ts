import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[click-to-reveal]'
})
export class ClickToRevealDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  reveal(target) {
    target.style['white-space'] = 'normal';
  }

}
