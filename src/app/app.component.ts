import { Component, ChangeDetectorRef } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CustomValidator } from './common/custom.validator';
import {NodeIdentifier} from './common/node.identifier';
import * as moment from 'moment';
import firebase from 'firebase';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface bitStreamElement {
  bitStream: string;
  position: number;
 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private changeDetectRef:ChangeDetectorRef){  }
  counter = 0
  dataSource:any = [];
  node:any 
  bitStreamFormControl = new FormControl('', [Validators.required,CustomValidator.numeric ]);
  matcher = new MyErrorStateMatcher();
  bitStreamArray:any = []


   addBitStreamFn = () => {
    if(this.bitStreamFormControl.value?.length==9){
      this.bitStreamArray.push(this.bitStreamFormControl.value)
      this.dataSource = this.dataSource.concat([{"position":this.counter+1,"bitStream":this.bitStreamFormControl.value}])
      this.counter++
      this.node = NodeIdentifier.bitStreamFn( this.bitStreamArray);
      this.changeDetectRef.detectChanges();
    }
     
     
  }
  ngOnInit() {
    const time = moment.utc();
    const firebaseConfig = {};
    firebase.initializeApp(firebaseConfig);
    this.node = {};
    this.dataSource = [];
   
     
  }





}
