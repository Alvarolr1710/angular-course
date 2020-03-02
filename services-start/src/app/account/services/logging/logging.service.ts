import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() {
  }

  logStatusChange(name: string, status: string) {
    console.log(name + ' status changed, new status: ' + status);
  }
}
