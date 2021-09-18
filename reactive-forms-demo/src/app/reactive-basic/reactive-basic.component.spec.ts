import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveBasicComponent } from './reactive-basic.component';

describe('ReactiveBasicComponent', () => {
  let component: ReactiveBasicComponent;
  let fixture: ComponentFixture<ReactiveBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
