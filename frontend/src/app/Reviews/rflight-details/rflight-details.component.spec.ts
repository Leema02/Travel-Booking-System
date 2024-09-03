import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RflightDetailsComponent } from './rflight-details.component';

describe('RflightDetailsComponent', () => {
  let component: RflightDetailsComponent;
  let fixture: ComponentFixture<RflightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RflightDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RflightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
