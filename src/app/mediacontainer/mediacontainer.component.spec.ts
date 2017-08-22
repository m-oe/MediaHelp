import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediacontainerComponent } from './mediacontainer.component';

describe('MediacontainerComponent', () => {
  let component: MediacontainerComponent;
  let fixture: ComponentFixture<MediacontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediacontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediacontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
