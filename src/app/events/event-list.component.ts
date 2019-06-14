import { Component, OnInit} from '@angular/core'
import { EventService } from './shared/event-service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.Name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventListComponent implements OnInit {
  events:any

  constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }

  ngOnInit() {
    // The 'events' data is put on the route by the EventListResolver
    this.events = this.route.snapshot.data['events']
  }
}