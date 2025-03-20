import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialSealcoatingComponent } from './commercial-sealcoating.component';

describe('CommercialSealcoatingComponent', () => {
  let component: CommercialSealcoatingComponent;
  let fixture: ComponentFixture<CommercialSealcoatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialSealcoatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommercialSealcoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
