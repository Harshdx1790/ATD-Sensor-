import { Component,Input,OnChanges } from '@angular/core';
import {AppComponent}from '../app.component'
import {ChartBuilder} from './../common/chart.builder';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent {
  
  @Input() node :any
  
  ngOnChanges(){
    if(this.node[0]){
      console.log(this.node)
      ChartBuilder.drawCanvas(this.node,'myChart');
    }
   
  }
}
