import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

import * as firebase from 'firebase';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

    state: string = '';
    error: any;

    constructor(public af: AngularFireAuth) {
  }


  onSubmit(gpEmail: string, gpPassword: string) {
    return new Promise((resolve, reject) => {
      this.af.auth.signInWithEmailAndPassword(gpEmail, gpPassword)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }
  
  ngOnInit() {
  }

}
