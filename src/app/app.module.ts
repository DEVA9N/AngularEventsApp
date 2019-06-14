import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event-service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
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
  ],
  providers: [
    EventService, 
    EventListResolver,
    EventRouteActivator,
    ToastrService,
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