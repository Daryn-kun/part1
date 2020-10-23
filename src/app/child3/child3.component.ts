import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component{
  public students: Array<any>;
  constructor(private sharedService: SharedService) { }
  getStudentAddress(){
    this.students = this.sharedService.getStudents();
  }
}
