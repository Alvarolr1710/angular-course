import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementVisible = true;
  elements = [];


  displayElement() {
    this.elementVisible = !this.elementVisible;
    this.elements.push(new Date());
    console.log(this.elements.length);
  }

  getBackground(elementItem: number) {
    return elementItem >= 5 ? 'blue' : 'white';
  }

  isStyled(elementItem: any) {
    return elementItem >= 5;
  }
}
