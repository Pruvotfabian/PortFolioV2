import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEndgameComponent } from './projet-endgame.component';

describe('ProjetEndgameComponent', () => {
  let component: ProjetEndgameComponent;
  let fixture: ComponentFixture<ProjetEndgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetEndgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetEndgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
