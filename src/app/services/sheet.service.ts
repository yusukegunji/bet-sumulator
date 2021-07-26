import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sheet } from '../interfaces/sheet';

@Injectable({
  providedIn: 'root',
})
export class SheetService {
  constructor(
    private db: AngularFirestore,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  async createSheet(sheetData: Omit<Sheet, 'id'>) {
    const sheetId = this.db.createId();
    await this.db
      .doc(`sheets/${sheetId}`)
      .set({
        id: `${sheetId}`,
        ...sheetData,
      })
      .then(() => this.snackBar.open('新しいシートが作成されました'))
      .finally(() => this.router.navigateByUrl(`/workspace/${sheetId}`));
  }

  getSheet(sheetId: string): Observable<Sheet> {
    return this.db.doc<Sheet>(`sheets/${sheetId}`).valueChanges();
  }
}
