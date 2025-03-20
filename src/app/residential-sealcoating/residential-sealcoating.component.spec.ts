import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialSealcoatingComponent } from './residential-sealcoating.component';

describe('ResidentialSealcoatingComponent', () => {
  let component: ResidentialSealcoatingComponent;
  let fixture: ComponentFixture<ResidentialSealcoatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentialSealcoatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidentialSealcoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
