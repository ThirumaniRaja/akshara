import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { PeriodicElement } from 'src/app/models/tableData';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



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

 

export class TableViewComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // resultData = new MatTableDataSource<PeriodicElement>();
  resultData:any = [];


  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  displayedColumns: string[] = ['id', 'role', 'location', 'organization','gender','vacany','requirement'];
  // dataSource = ELEMENT_DATA;

  constructor() { }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
    // this.resultData.paginator = this.paginator;
    // this.dataSource.paginator = this.paginator;

    console.log("ngAfterViewInit",this.resultData)
    
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    // const result = words.filter(word => word.length > 6);
    this.resultData.push(this.dataSource);
    console.log("ngOnInit",this.resultData)

    this.resultData = this.resultData[0].filteredData.filter((word:any) => word.role === 'BPO');
    this.resultData.paginator = this.paginator;
    console.log("ngOnInit",this.resultData)

    // this.dataSource.paginator = this.paginator;


  }

}
