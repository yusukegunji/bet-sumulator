import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  constructor(private db: AngularFirestore) {}

  // getNumOfAppears(index: number) {
  //   return this.db.collection(`races`, (ref) => ref.where('res'));
  // }
}
