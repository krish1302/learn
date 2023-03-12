import { TestBed } from '@angular/core/testing';

import { Child1Service } from './child1.service';

describe('Child1Service', () => {
  let service: Child1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Child1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
