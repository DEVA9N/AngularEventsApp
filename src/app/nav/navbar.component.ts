import { Component, Output } from '@angular/core'
import { AuthService } from '../user/auth.service';
import { EventService, ISession, IEvent } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchForm { display:none }}
        li > a.active { color: #F97924}
    `]
})
export class NavBarComponent {
    searchTerm: String = ""
    foundSessions: ISession[]

    events: IEvent[]

    constructor(private auth: AuthService, private eventService: EventService) {

    }

    searchSessions(searchTerm: String) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions =>
            this.foundSessions = sessions)
    }

    ngOnInit(): void {

        this.eventService.getEvents().subscribe(events => {
            this.events = events
        })

    }
}