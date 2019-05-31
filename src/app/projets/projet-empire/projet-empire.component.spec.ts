import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEmpireComponent } from './projet-empire.component';

describe('ProjetEmpireComponent', () => {
  let component: ProjetEmpireComponent;
  let fixture: ComponentFixture<ProjetEmpireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetEmpireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetEmpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
