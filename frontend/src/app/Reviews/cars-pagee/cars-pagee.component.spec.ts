import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsPageeComponent } from './cars-pagee.component';

describe('CarsPageeComponent', () => {
  let component: CarsPageeComponent;
  let fixture: ComponentFixture<CarsPageeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsPageeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsPageeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
