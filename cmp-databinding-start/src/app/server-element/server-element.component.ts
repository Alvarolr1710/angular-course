import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input() element: { type: string, name: string, content: string };

  constructor() {
    console.log('constructor call');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges call');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit call');
  }

}
