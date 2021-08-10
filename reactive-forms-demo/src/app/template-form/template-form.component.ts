import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  ngOnInit(): void {
  }

  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }
}

export class country {
  id:string;
  name:string;

  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
