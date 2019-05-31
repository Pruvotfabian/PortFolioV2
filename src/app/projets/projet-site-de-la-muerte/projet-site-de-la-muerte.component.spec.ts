import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetSiteDeLaMuerteComponent } from './projet-site-de-la-muerte.component';

describe('ProjetSiteDeLaMuerteComponent', () => {
  let component: ProjetSiteDeLaMuerteComponent;
  let fixture: ComponentFixture<ProjetSiteDeLaMuerteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetSiteDeLaMuerteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetSiteDeLaMuerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
