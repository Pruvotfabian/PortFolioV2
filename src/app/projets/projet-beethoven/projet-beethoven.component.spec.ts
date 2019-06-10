import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetBeethovenComponent } from './projet-beethoven.component';

describe('ProjetBeethovenComponent', () => {
  let component: ProjetBeethovenComponent;
  let fixture: ComponentFixture<ProjetBeethovenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetBeethovenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetBeethovenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
