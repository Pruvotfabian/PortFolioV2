import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetStygeonComponent } from './projet-stygeon.component';

describe('ProjetStygeonComponent', () => {
  let component: ProjetStygeonComponent;
  let fixture: ComponentFixture<ProjetStygeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetStygeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetStygeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
