import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectitemsComponent } from './selectitems.component';

describe('SelectitemsComponent', () => {
  let component: SelectitemsComponent;
  let fixture: ComponentFixture<SelectitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
