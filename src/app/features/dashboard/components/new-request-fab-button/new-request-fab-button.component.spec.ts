import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestFabButtonComponent } from './new-request-fab-button.component';

describe('NewRequestFabButtonComponent', () => {
  let component: NewRequestFabButtonComponent;
  let fixture: ComponentFixture<NewRequestFabButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewRequestFabButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewRequestFabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
