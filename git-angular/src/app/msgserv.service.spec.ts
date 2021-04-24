import { TestBed } from '@angular/core/testing';

import { MsgservService } from './msgserv.service';

describe('MsgservService', () => {
  let service: MsgservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
