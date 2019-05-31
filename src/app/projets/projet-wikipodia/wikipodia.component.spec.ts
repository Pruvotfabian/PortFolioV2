import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipodiaComponent } from './wikipodia.component';

describe('WikipodiaComponent', () => {
  let component: WikipodiaComponent;
  let fixture: ComponentFixture<WikipodiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikipodiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikipodiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
