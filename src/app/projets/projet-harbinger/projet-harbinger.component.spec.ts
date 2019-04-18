import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetHarbingerComponent } from './projet-harbinger.component';

describe('ProjetHarbingerComponent', () => {
  let component: ProjetHarbingerComponent;
  let fixture: ComponentFixture<ProjetHarbingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetHarbingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetHarbingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
