import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetSuprematieComponent } from './projet-suprematie.component';

describe('ProjetSuprematieComponent', () => {
  let component: ProjetSuprematieComponent;
  let fixture: ComponentFixture<ProjetSuprematieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetSuprematieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetSuprematieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
