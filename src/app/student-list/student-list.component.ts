import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Output('students') featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

 
  constructor() { }

  ngOnInit() {
  }

}
