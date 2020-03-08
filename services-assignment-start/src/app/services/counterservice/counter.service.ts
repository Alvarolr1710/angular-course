import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  setToActiveCounter = 0;
  setToInactiveCounter = 0;

  constructor() {
  }

  logSetToActive() {
    this.setToActiveCounter++;
    console.log('Times set to active: ' + this.setToActiveCounter);
  }

  logSetToInactive() {
    this.setToInactiveCounter++;
    console.log('Times set to inactive: ' + this.setToInactiveCounter);
  }
}
