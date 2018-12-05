import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AddComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
