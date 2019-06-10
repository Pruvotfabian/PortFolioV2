import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetBotteComponent } from './projet-botte.component';

describe('ProjetBotteComponent', () => {
  let component: ProjetBotteComponent;
  let fixture: ComponentFixture<ProjetBotteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetBotteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetBotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
