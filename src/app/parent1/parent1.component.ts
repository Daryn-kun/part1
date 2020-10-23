import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css'],
  providers: [SharedService]
})
export class Parent1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
