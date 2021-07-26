import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class SheetService {
  constructor(
    private db: AngularFirestore,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  async createSheet(formData: { yosoka: string; joId: string }, uid: string) {
    const sheetId = this.db.createId();
    await this.db
      .doc(`sheets/${sheetId}`)
      .set({
        id: `${sheetId}`,
        yosokaId: formData.yosoka,
        joId: formData.joId,
        uid: uid,
        createdAt: firebase.firestore.Timestamp.now(),
      })
      .then(() => this.snackBar.open('新しいシートが作成されました'))
      .finally(() => this.router.navigateByUrl(`/workspace/${sheetId}`));
  }
}
