import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategoryComponent } from './search-category.component';

describe('SearchCategoryComponent', () => {
  let component: SearchCategoryComponent;
  let fixture: ComponentFixture<SearchCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
