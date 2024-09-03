import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsPageeComponent } from './hotels-pagee.component';

describe('HotelsPageeComponent', () => {
  let component: HotelsPageeComponent;
  let fixture: ComponentFixture<HotelsPageeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsPageeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelsPageeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
