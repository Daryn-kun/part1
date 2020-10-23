import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component{
  public students: Array<any>;
  constructor(private sharedService: SharedService) { }
  getStudentsDetail(){
    this.students = this.sharedService.getStudents();
  }


}
