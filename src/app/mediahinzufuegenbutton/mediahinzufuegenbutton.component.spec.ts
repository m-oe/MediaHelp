import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediahinzufuegenbuttonComponent } from './mediahinzufuegenbutton.component';

describe('MediahinzufuegenbuttonComponent', () => {
  let component: MediahinzufuegenbuttonComponent;
  let fixture: ComponentFixture<MediahinzufuegenbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediahinzufuegenbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediahinzufuegenbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
