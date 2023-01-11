import {AbstractControl} from '@angular/forms'

export class CustomValidator{
    // Number only validation
    static numeric(control: AbstractControl) {
      let val = control.value;
  
      if (val === null || val === '') return null;
  
      if (!val.toString().match(/^[01]{9}$/g)) return { 'invalidNumber': true };
  
      return null;
    }
  }