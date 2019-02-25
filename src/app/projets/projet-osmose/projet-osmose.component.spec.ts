import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetOsmoseComponent } from './projet-osmose.component';

describe('ProjetOsmoseComponent', () => {
  let component: ProjetOsmoseComponent;
  let fixture: ComponentFixture<ProjetOsmoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetOsmoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetOsmoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
