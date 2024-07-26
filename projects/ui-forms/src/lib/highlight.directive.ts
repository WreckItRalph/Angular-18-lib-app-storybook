import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[libHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() color!: string;
  constructor() { }

  @HostBinding('style.background-color')
  get BgColor() {
    return 'black';
  }

  @HostBinding('style.color')
  get Color() {
    return this.color;
  }

}
