import { Component, OnInit } from '@angular/core';
import { Anwender } from '../Domainmodel/Anwender';
import { SpeakerListService } from '../Domainservices/speakerList.service';
import { Observable } from 'rxjs/Rx';
import { NgModel } from '@angular/forms';
const INITIALTIME = 120;
@Component({
  selector: 'app-speechreservierung',
  templateUrl: './speechreservierung.component.html',
  styleUrls: ['./speechreservierung.component.css']
})

export class SpeechreservierungComponent implements OnInit {
  speaker: Anwender;
  speakersList: Array<Anwender>;
  meinClient: Anwender;
  master: Anwender;
  time: number = 120;
  initialTime: number = INITIALTIME;
  pause: Boolean = true;

  constructor(
    private speakerService: SpeakerListService,
  ) { }

  ngOnInit() {

    this.speakerService.getUnterhaltungspool().subscribe((pool) => {
      this.speakersList = pool.anwenderGroup;
      this.master = pool.master;
      this.speaker = pool.anwenderGroup[0] || pool.master
    });

    this.speakerService.getActualClient().subscribe((client) => {
      this.meinClient = client;
    })

    Observable.timer(0, 1000).subscribe(() => this.iterateSpeakers())
    
  }
  clickReserveTime() {
    this.speakerService.getActualClient().subscribe((client) => {
      if ((this.speakersList.length - 1) !== this.speakersList.lastIndexOf(client)) {
        this.speakersList.push(client);
      }
    })
  }
  iterateSpeakers() {
    if (!this.pause) {
      this.time--;
      if (this.time === 0) {
        console.log(this.initialTime);

        this.time = this.initialTime;
        this.assignToNextSpeaker();
      }

    }

  }

  freePlace(user: Anwender) {
    this.speakersList = this.speakersList.filter((u) => {
      return u !== user;
    })
  }

  freemyplace() {
    this.speakerService.getActualClient().subscribe((client) => {
      if (this.speakersList.lastIndexOf(client)) {
        this.speakersList = this.speakersList.filter((speaker) => {
          return this.speakersList.indexOf(speaker) !== this.speakersList.lastIndexOf(client);
        })
      }
    });
  }

  masterModusStarten() {
    this.master = this.meinClient;
  }
  userModusStarten() {
    this.master = new Anwender('master1');
  }

  assignToNextSpeaker() {
    this.time = this.initialTime || INITIALTIME;
    if (this.speakersList[0]) {
      this.speaker = this.speakersList[0];
      this.speakersList = this.speakersList.filter((speak) => {
        return this.speakersList.indexOf(speak) !== 0;
      })
    }
  }
  startMeeting() {
    this.pause = false;
  }
  pauseMeeting() {
    this.pause = true;
  }

}
