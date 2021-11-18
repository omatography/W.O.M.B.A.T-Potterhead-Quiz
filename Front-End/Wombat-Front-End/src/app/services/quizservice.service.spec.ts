import { TestBed } from '@angular/core/testing';

import { QuizService } from './quizservice.service';

describe('QuizserviceService', () => {
  let service: QuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
