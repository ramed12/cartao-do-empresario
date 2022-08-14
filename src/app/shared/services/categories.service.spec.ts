import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { Categories } from '@shared-models';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let categoriesService: CategoriesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    categoriesService = new CategoriesService(httpClientSpy);
  });

  it('should return expected categories (HttpClient called once)', (done: DoneFn) => {
    const expectedCategories: Categories[] = [
      { id: 1, nome: 'A', slug: 'ABC' },
      { id: 2, nome: 'B', slug: 'DEF' },
    ];

    httpClientSpy.get.and.returnValue(of(expectedCategories));

    categoriesService.getCategories().subscribe({
      next: categories => {
        expect(categories)
          .withContext('expected categories')
          .toEqual(expectedCategories);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return an error when the server returns a 404!', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(of(errorResponse));

    categoriesService.getCategories().subscribe({
      next: categories => done.fail('expected an error, not categories'),
      error: error => {
        expect(error.message).toContain('test 404 error');
        done();
      },
    });
  });
});
