import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsphaltRepairComponent } from './asphalt-repair.component';

describe('AsphaltRepairComponent', () => {
  let component: AsphaltRepairComponent;
  let fixture: ComponentFixture<AsphaltRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsphaltRepairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsphaltRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
