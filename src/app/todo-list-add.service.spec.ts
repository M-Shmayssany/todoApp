import { TestBed } from '@angular/core/testing';

import { TodoListAddService } from './todo-list-add.service';

describe('TodoListAddService', () => {
  let service: TodoListAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
