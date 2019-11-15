import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostGeneralResultComponent } from './search-post-general-result.component';

describe('SearchPostGeneralResultComponent', () => {
  let component: SearchPostGeneralResultComponent;
  let fixture: ComponentFixture<SearchPostGeneralResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostGeneralResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostGeneralResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
