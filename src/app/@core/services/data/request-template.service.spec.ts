import { TestBed } from '@angular/core/testing';

import { RequestTemplateService } from './request-template.service';

describe('RequestTemplateService', () => {
  let service: RequestTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
