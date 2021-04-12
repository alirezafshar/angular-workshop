import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-child',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customers: Customer[] = [
    {customerNo: 1, name: 'Rahuld Dravid', address: 'A', city: 'Banglaore', state: 'Karnataka', country: 'Canada'},
    {customerNo: 2, name: 'Sachin Tendulkar', address: 'B', city: 'Mumbai', state: 'Maharastra', country: 'Iran'},
    {customerNo: 3, name: 'Saurrav Ganguly', address: 'C', city: 'Kolkata', state: 'West Bengal', country: 'India'},
    {customerNo: 4, name: 'Mahendra Singh Dhoni', address: 'D', city: 'Ranchi', state: 'Bihar', country: 'USA'},
    {customerNo: 5, name: 'Virat Kohli', address: 'E', city: 'Delhi', state: 'Delhi', country: 'Canada'},
  ]
}
