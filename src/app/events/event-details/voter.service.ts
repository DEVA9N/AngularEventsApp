import { Injectable } from '@angular/core';
import { ISession } from '..';

@Injectable()
export class VoterService {

    addVote(session: ISession, voterName: string) {
        session.voters.push(voterName)
    }

    removeVote(session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName)
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(voter => voter === voterName)
    }
}