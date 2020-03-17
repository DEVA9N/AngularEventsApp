import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any> {
  
    constructor(private eventService:EventService) {
        
    }
  
    resolve() {
        // subscribe is required because the http call only is executed if someone is subscribed
        // return this.eventService.getEvents().subscribe()
        return this.eventService.getEvents()
    }
}