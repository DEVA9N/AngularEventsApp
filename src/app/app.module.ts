import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  EventListComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventThumbnailComponent,
  EventService,
  EventListResolver,
  EventRouteActivator,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
} from './events/index' 
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { CollapsibleWellComponent, SimpleModalComponent, JQ_TOKEN, TOASTR_TOKEN, Toastr } from './common/index';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let toastr: Toastr = window["toastr"]
let jQuery = window["$"]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    Error404Component,
    EventsAppComponent,
    EventListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    NavBarComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    DurationPipe,
  ],
  providers: [
    // Note how the auth service is shared between modules if defined centrally
    AuthService,
    EventService, 
    EventListResolver,
    EventRouteActivator,
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: 'canDeactivateCreateEvent', useValue: canLeavePage },
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function canLeavePage(component:CreateEventComponent) : boolean {
  if (component.isDirty)
  {
    return window.confirm('You have not saved this event, do you really want to cancel?') 
  }

  return true
}