import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Jo } from '../interfaces/jo';
import { Race } from '../interfaces/race';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  constructor(private db: AngularFirestore) {}

  getRacesByJoId(joId: number): Observable<Race[]> {
    return this.db
      .collection<Race>('races', (ref) => ref.where('joId', '==', joId))
      .valueChanges();
  }

  getWinRaces(index: number, joId: number): Observable<Race[]> {
    return this.db
      .collection<Race>('races', (ref) =>
        ref.where('res1', '==', index).where('joId', '==', joId)
      )
      .valueChanges();
  }

  getVenue(joId: number): Observable<Jo> {
    return this.db.doc<Jo>(`venues/${joId}`).valueChanges();
  }
}
