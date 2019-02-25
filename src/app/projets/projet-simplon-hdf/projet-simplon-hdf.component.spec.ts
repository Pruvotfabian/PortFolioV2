import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetSimplonHdfComponent } from './projet-simplon-hdf.component';

describe('ProjetSimplonHdfComponent', () => {
  let component: ProjetSimplonHdfComponent;
  let fixture: ComponentFixture<ProjetSimplonHdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetSimplonHdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetSimplonHdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
