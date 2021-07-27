import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private db: AngularFirestore) {}

  getMembers(): Observable<User[]> {
    return this.db.collection<User>(`users`).valueChanges();
  }
}
