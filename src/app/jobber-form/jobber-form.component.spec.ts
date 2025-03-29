import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobberFormComponent } from './jobber-form.component';

describe('JobberFormComponent', () => {
  let component: JobberFormComponent;
  let fixture: ComponentFixture<JobberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobberFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
