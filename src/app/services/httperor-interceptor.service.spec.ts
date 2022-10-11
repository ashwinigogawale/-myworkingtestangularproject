import { TestBed } from '@angular/core/testing';

import { HttperorInterceptorService } from './httperor-interceptor.service';

describe('HttperorInterceptorService', () => {
  let service: HttperorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttperorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
