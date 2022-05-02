import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/models/tableData';

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, role: 'General Manager', location: 'Sion', organization: 'TCE',gender:'male',vacany:'2',requirement:'Proficient in MS Office'},
  {id: 2, role: 'General Manager', location: 'Andheri', organization: 'WIPRO',gender:'all',vacany:'1',requirement:'Proficient in CRM'},
  {id: 3, role: 'BPO', location: 'Vasi', organization: 'TCS ',gender:'all',vacany:'4',requirement:'Background in customer service'},
  {id: 4, role: 'BPO', location: 'Malad', organization: 'INFOSYS',gender:'female',vacany:'2',requirement:'Proficient in MS Office'},
  {id: 5, role: 'Technician', location: 'Vasi', organization: 'TCS',gender:'male',vacany:'2',requirement:'field work'},
  {id: 6, role: 'Invoice Operator', location: 'Malad', organization: 'TCE',gender:'all',vacany:'3',requirement:'Proficient in MS Office'},
  {id: 7, role: 'Credit Manager', location: 'Andheri', organization: 'WIPRO',gender:'male',vacany:'5',requirement:'Proficient in MS Excel'},
  {id: 8, role: 'Software Developer', location: 'Mahim', organization: 'ACCENTURE',gender:'all',vacany:'1',requirement:'AWS server handling'},
  {id: 9, role: 'Software Developer', location: 'powai', organization: 'ACCENTURE',gender:'all',vacany:'2',requirement:'DBMS manager'},
  {id: 10, role: 'Credit Manager', location: 'powai', organization: 'TCS',gender:'male',vacany:'3',requirement:'Credit manager'},
]

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})

 

export class TableViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'role', 'location', 'organization','gender','vacany','requirement'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
