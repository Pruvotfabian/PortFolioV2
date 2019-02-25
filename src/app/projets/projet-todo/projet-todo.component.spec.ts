import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetTodoComponent } from './projet-todo.component';

describe('ProjetTodoComponent', () => {
  let component: ProjetTodoComponent;
  let fixture: ComponentFixture<ProjetTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
