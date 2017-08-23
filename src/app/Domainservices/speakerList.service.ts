import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { speakerListmock, actualclient } from "../mockData/mockSpeakerList";
import { Unterhaltungspool } from '../Domainmodel/Unterhaltungspool'
import { Anwender } from '../Domainmodel/Anwender';
@Injectable()
export class SpeakerListService {
  speakerlist: Array<Anwender>;
  actualCient: Anwender;
  constructor() { }

  getAnwenderpool() {
    if (!this.speakerlist) {
      return Observable.of(speakerListmock);
    }
  }

  getActualClient() {
    if (!this.actualCient) {
      return Observable.of(actualclient);
    }
  }
}
