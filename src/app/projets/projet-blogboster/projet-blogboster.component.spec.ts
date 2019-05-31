import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetBlogbosterComponent } from './projet-blogboster.component';

describe('ProjetBlogbosterComponent', () => {
  let component: ProjetBlogbosterComponent;
  let fixture: ComponentFixture<ProjetBlogbosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetBlogbosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetBlogbosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
