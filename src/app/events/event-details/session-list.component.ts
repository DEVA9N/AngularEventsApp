import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared'

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string
    visibleSessions: ISession[] = []

    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortSessions(this.sortBy)
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0)
        } else {
            this.visibleSessions = this.sessions.filter(s => { return s.level.toLowerCase() === filter})
        }
    }

    sortSessions(sortBy: string) {
        if(sortBy==='name'){
            this.visibleSessions.sort(sortByNameAscending)
        }else{
            this.visibleSessions.sort(sortByVotesAscending)
        }
    }

}

function sortByNameAscending(s1: ISession, s2: ISession) {
    if (s1.name > s2.name){
        return 1
    } else if (s1.name === s2.name) {
        return 0
    } else{
        return -1
    }
}

function sortByVotesAscending(s1: ISession, s2: ISession) {
   return s2.voters.length - s1.voters.length
}