import { Component} from '@angular/core'

@Component({
    selector:'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <event-thumbnail [event]="event1"></event-thumbnail>
        <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '01.01.2070',
        time: '15:00',
        price: 123.45,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
                address: 'Some Street',
                city: 'A Town',
                county: 'Somewhere'
        }
    }
    event2 = {
        id: 1,
        name: 'Angular Connect',
        date: '01.01.2070',
        time: '15:00',
        price: 123.45,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
                address: 'Some Street',
                city: 'A Town',
                county: 'Somewhere'
        }
    }
}