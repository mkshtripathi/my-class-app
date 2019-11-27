import { Component, OnInit } from '@angular/core';
import { Chapters } from './chapters.model';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  chapters: Chapters[] = [
    new Chapters('Unit 1', 'Documents for Unit 1'),
    new Chapters('Unit 2', 'Documents for Unit 2')
  ];
  constructor() { }

  ngOnInit() {
  }

}
