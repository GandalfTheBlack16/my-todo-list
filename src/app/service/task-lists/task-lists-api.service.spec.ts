import { TestBed } from '@angular/core/testing';

import { TaskListsApiService } from './task-lists-api.service';

describe('TaskListsApiService', () => {
  let service: TaskListsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskListsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
