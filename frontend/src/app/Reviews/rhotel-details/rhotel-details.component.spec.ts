import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhotelDetailsComponent } from './rhotel-details.component';

describe('RhotelDetailsComponent', () => {
  let component: RhotelDetailsComponent;
  let fixture: ComponentFixture<RhotelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RhotelDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RhotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
