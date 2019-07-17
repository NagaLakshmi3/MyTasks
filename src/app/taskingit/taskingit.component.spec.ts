import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskingitComponent } from './taskingit.component';

describe('TaskingitComponent', () => {
  let component: TaskingitComponent;
  let fixture: ComponentFixture<TaskingitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskingitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskingitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
