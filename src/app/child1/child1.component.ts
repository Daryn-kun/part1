import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component{
  students: Array<any>;
  constructor(private sharedService: SharedService) {
  }
  // tslint:disable-next-line:typedef
  getStudentsName(){
    this.students = this.sharedService.getStudents();
  }
}
