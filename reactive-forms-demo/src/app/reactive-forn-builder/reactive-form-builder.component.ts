import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { country } from '../template-form/template-form.component';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.scss']
})
export class ReactiveFormBuilderComponent implements OnInit {

  contactForm!: FormGroup;
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      gender: [''],
      isMarried: [''],
      country: [''],
      address: this.formBuilder.group({
        city: [''],
        street: [''],
        pincode: ['']
      }
      )
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  loadWithDefaultValue() {
    this.contactForm = this.formBuilder.group({
      firstname: ['Hari'],
      lastname: ['Katakam'],
      email: ['h.h@,com'],
      gender: ['male'],
      isMarried: [true],
      country: [''],
      address: this.formBuilder.group({
        city: ['Hyderabad'],
        street: [''],
        pincode: ['']
      }
      )
    });
  }
}
