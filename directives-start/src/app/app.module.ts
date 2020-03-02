import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {BetterHighlightDirective} from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
