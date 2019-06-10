import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetTheForgottenComponent } from './projet-the-forgotten.component';

describe('ProjetTheForgottenComponent', () => {
  let component: ProjetTheForgottenComponent;
  let fixture: ComponentFixture<ProjetTheForgottenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetTheForgottenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetTheForgottenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
