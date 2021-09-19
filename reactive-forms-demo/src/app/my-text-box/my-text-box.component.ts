import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-my-text-box',
  templateUrl: './my-text-box.component.html',
  styleUrls: ['./my-text-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyTextBoxComponent),
      multi: true
    }]
})
export class MyTextBoxComponent {

  constructor() { }

  onChange = (_value: any) => {};

  onTouched = () => {};

  _val: any;
  set val (v: any) {
    this._val = v;
    this.onChange(v);
    this.onTouched();
  }
  get val() {
    return this._val;
  }

}


// export class MyTextBoxComponent implements ControlValueAccessor {

//   constructor() { }

//   onChange = (_value: any) => {};

//   onTouched = () => {};


//   writeValue(val: any): void {
//     this.val = val;
//   }

//   registerOnChange(fn: any): void {
//     this.onChange = fn;
//   }

//   registerOnTouched(fn: any): void {
//     this.onTouched = fn;
//   }

//   _val: any;
//   set val (v: any) {
//     this._val = v;
//     this.onChange(v);
//     this.onTouched();
//   }
//   get val() {
//     return this._val;
//   }

// }
