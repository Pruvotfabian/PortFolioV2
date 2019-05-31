import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEmpirev2Component } from './projet-empirev2.component';

describe('ProjetEmpirev2Component', () => {
  let component: ProjetEmpirev2Component;
  let fixture: ComponentFixture<ProjetEmpirev2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetEmpirev2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetEmpirev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
