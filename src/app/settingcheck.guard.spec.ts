import { TestBed } from '@angular/core/testing';

import { SettingcheckGuard } from './settingcheck.guard';

describe('SettingcheckGuard', () => {
  let guard: SettingcheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SettingcheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
