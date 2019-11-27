import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { StudentsComponent } from './student-list/students/students.component';
import { ChaptersComponent } from './chapter-list/chapters/chapters.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentListComponent,
    ChapterListComponent,
    StudentsComponent,
    ChaptersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
