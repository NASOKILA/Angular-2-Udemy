import { CapitalizePipe } from './capitalize.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '../../node_modules/@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './authors/author.service';
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star/star.component';
import { AssignmentComponent } from './assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    StarComponent,
    AssignmentComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
