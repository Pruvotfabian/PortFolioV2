import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetTitanoComponent } from './projet-titano.component';

describe('ProjetTitanoComponent', () => {
  let component: ProjetTitanoComponent;
  let fixture: ComponentFixture<ProjetTitanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetTitanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetTitanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
