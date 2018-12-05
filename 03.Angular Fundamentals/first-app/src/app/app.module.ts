import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './authors/author.service';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,

    ZippyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
