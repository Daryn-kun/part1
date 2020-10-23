import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private loggingService: LoggingService) { }
  // tslint:disable-next-line:typedef
  public getStudents(){
    let studentsList: Array<any>;
    studentsList = [
      {id: 26229, firstName: 'Daryn', lastName: 'Nurlan', middleName: 'Rustemuly', address: 'Almaty, Talgar'},
      {id: 26214, firstName: 'Togzhan', lastName: 'Salim', middleName: 'Salimkyzy', address: 'Almaty'},
      {id: 26221, firstName: 'Madina', lastName: 'Kairat', middleName: 'Kairatkyzy', address: 'Taraz, Shu'},
    ];
    this.loggingService.log('List of students: ' + studentsList);
    return studentsList;
  }
}
