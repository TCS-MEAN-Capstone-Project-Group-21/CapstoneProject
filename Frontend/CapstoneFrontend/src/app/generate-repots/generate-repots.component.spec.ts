import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRepotsComponent } from './generate-repots.component';

describe('GenerateRepotsComponent', () => {
  let component: GenerateRepotsComponent;
  let fixture: ComponentFixture<GenerateRepotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateRepotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateRepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
