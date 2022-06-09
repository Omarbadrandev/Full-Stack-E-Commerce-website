import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Omar', 'Badran', 'OmarBadran@hotmail.com', 5000),
    new SalesPerson('Omar1', 'Badran', 'OmarBadran@hotmail.com', 6000),
    new SalesPerson('Omar2', 'Badran', 'OmarBadran@hotmail.com', 10000),
    new SalesPerson('Omar4', 'Badran', 'OmarBadran@hotmail.com', 8000),
  ];

  constructor() {}

  ngOnInit(): void {}
}
