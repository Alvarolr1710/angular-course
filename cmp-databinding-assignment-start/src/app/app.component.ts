import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddCounter: number[] = [];
  evenCounter: number[] = [];

  getCounter(counterValue: number) {
    if (counterValue % 2 === 0) {
      this.evenCounter.push(counterValue);
    } else {
      this.oddCounter.push(counterValue);
    }

  }

}
