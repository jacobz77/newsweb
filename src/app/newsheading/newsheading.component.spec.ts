import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsheadingComponent } from './newsheading.component';

describe('NewsheadingComponent', () => {
  let component: NewsheadingComponent;
  let fixture: ComponentFixture<NewsheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsheadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
