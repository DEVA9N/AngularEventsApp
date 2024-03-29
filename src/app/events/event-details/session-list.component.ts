import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared'
import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service'

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string
    @Input() eventId: number
    visibleSessions: ISession[] = []

    constructor(private authService: AuthService, private voterService: VoterService) {

    }

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
            this.visibleSessions = this.sessions.filter(s => { return s.level.toLowerCase() === filter })
        }
    }

    sortSessions(sortBy: string) {
        if (sortBy === 'name') {
            this.visibleSessions.sort(sortByNameAscending)
        } else {
            this.visibleSessions.sort(sortByVotesAscending)
        }
    }

    canVote(): boolean {
        return this.authService.isAuthenticated()
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.removeVote(this.eventId, session, this.authService.currentUser.userName)
        } else {
            this.voterService.addVote(this.eventId, session, this.authService.currentUser.userName)
        }

        if (this.sortBy === "votes") {
            this.visibleSessions.sort(sortByVotesAscending)
        }
    }

    userHasVoted(session: ISession): boolean {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName)
    }
}

function sortByNameAscending(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1
    } else if (s1.name === s2.name) {
        return 0
    } else {
        return -1
    }
}

function sortByVotesAscending(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length
}