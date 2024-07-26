import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiFormsComponent } from 'ui-forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiFormsComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui-lib';
  color: 'red' | 'green' = 'red';
  interval: any;
  ngOnInit() {
    // this.interval = setInterval(() => {
    //   this.color = this.color === 'red' ? 'green' : 'red';
    // }, 2000);
  }


  ngOnDestroy() {
    // clearInterval(this.interval);
  }
}
