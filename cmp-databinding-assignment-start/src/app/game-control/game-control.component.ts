import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counter = new EventEmitter<number>();
  myCounterMethod;
  value = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  startCounter() {
    this.myCounterMethod = setInterval(() => {
      this.counter.emit(this.value + 1);
      this.value++;
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.myCounterMethod);
  }

}
