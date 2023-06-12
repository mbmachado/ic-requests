import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTplsComponent } from './request-tpls.component';

describe('RequestTplsComponent', () => {
  let component: RequestTplsComponent;
  let fixture: ComponentFixture<RequestTplsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestTplsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestTplsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
