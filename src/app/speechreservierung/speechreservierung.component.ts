import { Component, OnInit } from '@angular/core';
import { Anwender } from '../Domainmodel/Anwender';
import { SpeakerListService } from '../Domainservices/speakerList.service';
import { SimpleTimer } from 'ng2-simple-timer';
import { Observable } from 'rxjs/Rx';
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
  speakerTime: any;
  time: number = 0;

  constructor(
    private speakerService: SpeakerListService,
    private timer: SimpleTimer
  ) { }

  ngOnInit() {

    this.speakerService.getUnterhaltungspool().subscribe((pool) => {
      this.speakersList = pool.anwenderGroup;
      this.master = pool.master;
      this.speaker = pool.speaker;
    });

    this.speakerService.getActualClient().subscribe((client) => {
      this.meinClient = client;
    })
    
    this.timer.subscribe('1sec', () => this.iterate())

  }
  clickReserveTime() {
    this.speakerService.getActualClient().subscribe((client) => {
      if ((this.speakersList.length - 1) !== this.speakersList.lastIndexOf(client)) {
        this.speakersList.push(client);
      }
    })
  }
  iterate() {
    this.time++;
    console.log(this.time);
    
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
}
