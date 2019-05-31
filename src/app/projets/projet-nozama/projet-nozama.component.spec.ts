import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetNozamaComponent } from './projet-nozama.component';

describe('ProjetNozamaComponent', () => {
  let component: ProjetNozamaComponent;
  let fixture: ComponentFixture<ProjetNozamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetNozamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetNozamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
