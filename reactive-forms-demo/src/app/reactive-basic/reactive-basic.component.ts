import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { country } from '../template-form/template-form.component';

@Component({
  selector: 'app-reactive-basic',
  templateUrl: './reactive-basic.component.html',
  styleUrls: ['./reactive-basic.component.scss']
})
export class ReactiveBasicComponent implements OnInit {
  contactForm!: FormGroup;
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  constructor() { }


  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      isMarried: new FormControl(),
      country: new FormControl(),
      address:new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        pincode:new FormControl()
      })
    })
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
