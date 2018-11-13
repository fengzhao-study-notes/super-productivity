import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BookmarkEffects } from './bookmark.effects';

describe('BookmarkEffects', () => {
  let actions$: Observable<any>;
  let effects: BookmarkEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookmarkEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BookmarkEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
