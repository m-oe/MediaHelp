import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechreservierungComponent } from './speechreservierung.component';

describe('SpeechreservierungComponent', () => {
  let component: SpeechreservierungComponent;
  let fixture: ComponentFixture<SpeechreservierungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechreservierungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechreservierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
