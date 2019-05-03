import { Component} from '@angular/core'

@Component({
    selector:'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    event = {
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