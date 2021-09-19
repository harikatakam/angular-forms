import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTextBoxComponent } from './my-text-box.component';

describe('MyTextBoxComponent', () => {
  let component: MyTextBoxComponent;
  let fixture: ComponentFixture<MyTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTextBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
