import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpDetailsComponent } from './show-emp-details.component';

describe('ShowEmpDetailsComponent', () => {
  let component: ShowEmpDetailsComponent;
  let fixture: ComponentFixture<ShowEmpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEmpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
