import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AssignmentComponent } from './assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    FormBuilderComponent,
    AssignmentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
