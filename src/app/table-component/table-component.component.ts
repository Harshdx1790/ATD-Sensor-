import { DataSource } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent {
  dataSource : any  = []
  @Input() data : any 
  displayedColumns: string[] = ['position', 'bitStream'];
  
  
  ngOnChanges(){
    this.dataSource = this.data
   
  }
}
