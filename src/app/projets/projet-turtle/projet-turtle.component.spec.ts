import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetTurtleComponent } from './projet-turtle.component';

describe('ProjetTurtleComponent', () => {
  let component: ProjetTurtleComponent;
  let fixture: ComponentFixture<ProjetTurtleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetTurtleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetTurtleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
