import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetSimplonCalaisComponent } from './projet-simplon-calais.component';

describe('ProjetSimplonCalaisComponent', () => {
  let component: ProjetSimplonCalaisComponent;
  let fixture: ComponentFixture<ProjetSimplonCalaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetSimplonCalaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetSimplonCalaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
