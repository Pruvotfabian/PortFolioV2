import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetOverlordComponent } from './projet-overlord.component';

describe('ProjetOverlordComponent', () => {
  let component: ProjetOverlordComponent;
  let fixture: ComponentFixture<ProjetOverlordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetOverlordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetOverlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
