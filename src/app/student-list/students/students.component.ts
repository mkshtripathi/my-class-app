import { Component, OnInit, Input } from '@angular/core';
import {Students} from './students.model';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input() students: Students;
  
 
  std: Students[] = [
    new Students('Mukesh Tripathi', '8A'),
    new Students('Aakash Tripathi', '11B')
  ];
  constructor() { }

  ngOnInit() {
  }

}
