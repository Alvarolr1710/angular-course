import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-username-control',
  templateUrl: './username-control.component.html',
  styleUrls: ['./username-control.component.css']
})
export class UsernameControlComponent implements OnInit {

  username = '';

  constructor() {
  }

  ngOnInit() {
  }


  resetUsername() {
    this.username = '';
  }
}
