import { Routes } from '@angular/router'
import { 
    EventDetailsComponent, 
    CreateEventComponent, 
    EventListComponent, 
    EventListResolver,
    EventResolver,
    CreateSessionComponent
} from './events/index'
import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventListComponent, resolve: { events:EventListResolver } },
    { path: 'events', component: EventListComponent, resolve: { event:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]