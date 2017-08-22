import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HauptSeiteComponent } from './haupt-seite.component';

describe('HauptSeiteComponent', () => {
  let component: HauptSeiteComponent;
  let fixture: ComponentFixture<HauptSeiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HauptSeiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HauptSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
