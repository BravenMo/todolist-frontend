import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitWeekComponent } from './submit-week.component';

describe('SubmitWeekComponent', () => {
  let component: SubmitWeekComponent;
  let fixture: ComponentFixture<SubmitWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
