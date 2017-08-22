import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { HauptSeiteComponent } from './haupt-seite/haupt-seite.component';

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
    HauptSeiteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,

    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
