import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaModalHeaderComponent } from './modal-header.component';

describe('BulmaModalHeaderComponent', () => {
  let component: BulmaModalHeaderComponent;
  let fixture: ComponentFixture<BulmaModalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BulmaModalHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
