import { Injectable } from '@angular/core';
import { ISession } from '..';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class VoterService {

    constructor(private http: HttpClient) {

    }

    addVote(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName)

        const options = { headers: new HttpHeaders({ "Content-Type": "application/json" }) }
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.post(url, {}, options)
            .pipe(catchError(this.handleError("addVote")))
            .subscribe()
    }

    removeVote(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName)

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.delete(url)
            .pipe(catchError(this.handleError("addVote")))
            .subscribe()
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(voter => voter === voterName)
    }


    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            console.error(error)
            return of(result as T)
        }
    }
}