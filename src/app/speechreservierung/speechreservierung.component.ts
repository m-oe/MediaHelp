import { Component, OnInit } from '@angular/core';
import { Anwender } from '../Domainmodel/Anwender';
import { SpeakerListService } from '../Domainservices/speakerList.service';
@Component({
  selector: 'app-speechreservierung',
  templateUrl: './speechreservierung.component.html',
  styleUrls: ['./speechreservierung.component.css']
})
export class SpeechreservierungComponent implements OnInit {
  speaker: Anwender;
  speakersList: Array<Anwender>;
  client: Anwender;
  constructor(private speakerService: SpeakerListService) { }

  ngOnInit() {
    if (!this.speaker) {
      this.speaker = new Anwender('1');
    }
    if (!this.speakersList) {
      this.speakersList = [];
    }
    this.speakerService.getAnwenderpool().subscribe((List) => {
      this.speakersList = List;
    });

  }
  clickReserveTime() {
    this.speakerService.getActualClient().subscribe((client) => {
      if ((this.speakersList.length - 1) !== this.speakersList.lastIndexOf(client)) {
        this.speakersList.push(client);
      }
    })
  }

  freemyplace() {
    this.speakerService.getActualClient().subscribe((client) => {
      console.log(this.speakersList.lastIndexOf(client));

      if (this.speakersList.lastIndexOf(client)) {
        this.speakersList = this.speakersList.filter((speaker) => {
          return this.speakersList.indexOf(speaker) !== this.speakersList.lastIndexOf(client);
        })
      }
    });
  }

}