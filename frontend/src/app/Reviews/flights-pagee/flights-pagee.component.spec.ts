import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsPageeComponent } from './flights-pagee.component';

describe('FlightsPageeComponent', () => {
  let component: FlightsPageeComponent;
  let fixture: ComponentFixture<FlightsPageeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightsPageeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightsPageeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
