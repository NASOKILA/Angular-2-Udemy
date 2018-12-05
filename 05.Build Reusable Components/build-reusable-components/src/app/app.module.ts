import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponentComponent } from './like-component/like-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PanelComponent,
    LikeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
