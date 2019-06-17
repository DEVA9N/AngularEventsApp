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
} from './events/index' 
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { Error404Component } from './errors/404.component';

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