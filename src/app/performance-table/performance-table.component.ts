import { Component, OnInit } from '@angular/core';
import { tabledata } from './mock-data';

@Component({
  selector: 'app-performance-table',
  templateUrl: './performance-table.component.html',
  styleUrls: ['./performance-table.component.scss']
})
export class PerformanceTableComponent implements OnInit {
dataTable:any[]=tabledata
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataTable)
  }

}
