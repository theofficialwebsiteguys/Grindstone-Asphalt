import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineStripingComponent } from './line-striping.component';

describe('LineStripingComponent', () => {
  let component: LineStripingComponent;
  let fixture: ComponentFixture<LineStripingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineStripingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineStripingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
