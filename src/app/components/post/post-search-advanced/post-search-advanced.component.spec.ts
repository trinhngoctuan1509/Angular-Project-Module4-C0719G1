import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSearchAdvancedComponent } from './post-search-advanced.component';

describe('PostSearchAdvancedComponent', () => {
  let component: PostSearchAdvancedComponent;
  let fixture: ComponentFixture<PostSearchAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSearchAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSearchAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
