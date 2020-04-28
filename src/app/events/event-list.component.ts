import { Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  templateUrl: './event-list.component.html',
})

export class EventListComponent implements OnInit {
  events:IEvent[]

  constructor(private eventService: EventService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    // The 'events' data is put on the route by the EventListResolver
    this.events = this.route.snapshot.data['events']
  }
}