import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetArcturusComponent } from './projet-arcturus.component';

describe('ProjetArcturusComponent', () => {
  let component: ProjetArcturusComponent;
  let fixture: ComponentFixture<ProjetArcturusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetArcturusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetArcturusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
