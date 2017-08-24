import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { speakerListmock, actualclientMock , unterhaltungspoolMock } from "../mockData/mockSpeakerList";
import { Unterhaltungspool } from '../Domainmodel/Unterhaltungspool'
import { Anwender } from '../Domainmodel/Anwender';
@Injectable()
export class SpeakerListService {
  speakerlist: Array<Anwender>;
  actualCient: Anwender;
  unterhaltungspool: Unterhaltungspool;
  constructor() { }

  getSpeakerList() {
    //  BACKEND
    if (!this.speakerlist) {
      return Observable.of(speakerListmock);
    }
  }

 

  getUnterhaltungspool() {
    // BACKEND 
    if (!this.unterhaltungspool) {
      return Observable.of(unterhaltungspoolMock);
    }

  }

  getActualClient() {
    
    if (!this.actualCient) {
      return Observable.of(actualclientMock);
    }
  }

  setMaster(anwender : Anwender){
    this.unterhaltungspool.master= anwender;
  }
}
