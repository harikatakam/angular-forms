import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sidValidator } from '../sid.validator';
import { country } from '../template-form/template-form.component';

@Component({
  selector: 'app-reactive-form-validations',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.scss']
})
export class ReactiveFormBuilderValidationsComponent implements OnInit {

  contactForm!: FormGroup;
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England'),
    new country('4', 'Srilanka'),
    new country('5', 'S.A')
  ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: [''],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      gender: [''],
      isMarried: [''],
      country: [''],
      sid:['', [sidValidator]],
      address: this.formBuilder.group({
        city: [''],
        street: [''],
        pincode: ['']
      }
      )
    }
    // , { updateOn: 'submit'}
    );

    this.contactForm.valueChanges.subscribe(val => {
      console.log('form Value changed!!')
    });

    this.contactForm.get('isMarried')?.valueChanges.subscribe(val => {
      if (val) {
        this.countryList = [
          new country("1", "India"),
          new country('2', 'USA'),
          new country('3', 'England')
        ];
      } else {
        this.countryList = [
          new country("1", "India"),
          new country('4', 'Srilanka'),
          new country('5', 'S.A')
        ];
      }
    })
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  setFirstName() {
    this.contactForm.get('firstname')?.setValue('set value by accessing form control');
  }

  setlastName() {
    this.contactForm.get('lastname')?.setValue('set value by accessing form control', {emitEvent: false});
  }

  resetFrom() {
    this.contactForm.reset();
  }

  setForm() {
    this.contactForm.setValue({
      "firstname": "Hari",
      "lastname": "Prasad",
      "email": "katakam.hari@yahoo.com",
      "gender": "male",
      "isMarried": true,
      "country": "2",
      "address": {
        "city": "wanaparthy",
        "street": "vallab Nagar",
        "pincode": "509103"
      }
    })
  }

  patchAddress() {

    this.contactForm?.get('address')?.patchValue({
      city: "Hyderabad",
      street: "Madhapur"
    });
  }

  setAddress() {
    this.contactForm?.get('address')?.setValue({
      city: "Hyderabad",
      street: "Madhapur"
    });
  }
}
