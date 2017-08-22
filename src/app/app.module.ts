import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { HauptSeiteComponent } from './haupt-seite/haupt-seite.component';
import { EmailComponent } from './email/email.component';


export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
  };


const appRoutes: Routes = [
  { path: 'hauptseite', component: HauptSeiteComponent },
  {
    path: '',
    redirectTo: '/hauptseite',
    pathMatch: 'full'
  },

];

@NgModule({
  declarations: [
    AppComponent,
    HauptSeiteComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
