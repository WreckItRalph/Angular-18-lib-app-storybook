import { Component, Input } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'lib-ui-forms',
  standalone: true,
  imports: [HighlightDirective],
  template: `
    <p libHighlight [color]='color'>
      ui-forms works!
    </p>
  `,
  styles: ``
})
export class UiFormsComponent {
  @Input() color !: string;

  ngOnChanges() {
    console.log('input changed', this.color);
  }
}
