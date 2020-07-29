import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetLegionComponent } from './projet-legion.component';

describe('ProjetLegionComponent', () => {
  let component: ProjetLegionComponent;
  let fixture: ComponentFixture<ProjetLegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetLegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetLegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
