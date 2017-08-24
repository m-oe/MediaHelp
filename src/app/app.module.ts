import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { HauptSeiteComponent } from './haupt-seite/haupt-seite.component';
import { SpeechreservierungComponent } from './speechreservierung/speechreservierung.component';
import { MediahinzufuegenbuttonComponent } from './mediahinzufuegenbutton/mediahinzufuegenbutton.component';
import { MediacontainerComponent } from './mediacontainer/mediacontainer.component';
import { SpeakerListService } from './Domainservices//speakerList.service';
import { MasterDirective } from './Directives/master.directive';

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
    SpeechreservierungComponent,
    MediahinzufuegenbuttonComponent,
    MediacontainerComponent,
    MasterDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,

    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [SpeakerListService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
