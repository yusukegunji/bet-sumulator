import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import deepmerge from 'deepmerge';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Jo } from '../interfaces/jo';
import {
  Sheet,
  SheetWithUser,
  SheetWithUserWithYosoka,
  SheetWithUserWithYosokaWithJo,
} from '../interfaces/sheet';
import { User } from '../interfaces/user';
import { Yosoka } from '../interfaces/yosoka';
import JraList from '../jra.json';
import NarList from '../nar.json';
import YosokaList from '../yosoka.json';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SheetService {
  joList: Jo[] = deepmerge(JraList, NarList);
  yosokaList: Yosoka[] = YosokaList;

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  async createSheet(sheetData: Omit<Sheet, 'id'>) {
    const sheetId = this.db.createId();
    await this.db
      .doc(`sheets/${sheetId}`)
      .set({
        id: sheetId,
        ...sheetData,
      })
      .then(() => this.snackBar.open('新しいシートが作成されました'))
      .finally(() => this.router.navigateByUrl(`/workspace/${sheetId}`));
  }

  setShikibetu(sheetId: string, shikibetu: string, uid: string) {
    this.db.doc(`sheets/${sheetId}`).set(
      {
        [shikibetu]: true,
        updatedUid: uid,
      },
      { merge: true }
    );
  }

  getSheet(sheetId: string): Observable<Sheet> {
    return this.db.doc<Sheet>(`sheets/${sheetId}`).valueChanges();
  }

  getSheetList(): Observable<SheetWithUser[]> {
    return this.db
      .collection<Sheet>(`sheets`, (ref) => ref.orderBy(`updatedAt`, `desc`))
      .valueChanges()
      .pipe(
        switchMap((sheets) => {
          if (sheets.length) {
            const distinctUids: string[] = Array.from(
              new Set(sheets.map((sheet) => sheet.createdUid))
            );

            const users$ = combineLatest(
              distinctUids.map((uid) => this.userService.getUserData(uid))
            );

            return combineLatest([of(sheets), users$]);
          } else {
            return of([]);
          }
        }),
        map(([sheets, users]) => {
          if (sheets.length) {
            return sheets.map((sheet: Sheet) => {
              return {
                ...sheet,
                createdUser: users.find(
                  (user: User) => sheet.createdUid === user?.uid
                ),
              };
            });
          } else {
            return [];
          }
        }),
        switchMap((sheets) => {
          if (sheets.length) {
            const distinctUids: string[] = Array.from(
              new Set(sheets.map((sheet) => sheet.updatedUid))
            );

            const users$ = combineLatest(
              distinctUids.map((uid) => this.userService.getUserData(uid))
            );

            return combineLatest([of(sheets), users$]);
          } else {
            return of([]);
          }
        }),
        map(([sheets, users]) => {
          if (sheets.length) {
            return sheets.map((sheet: Sheet) => {
              return {
                ...sheet,
                updatedUser: users.find(
                  (user: User) => sheet.updatedUid === user?.uid
                ),
              };
            });
          } else {
            return [];
          }
        })
      );
  }

  getSheetListWithUserWithYosokaWithJo(): Observable<
    SheetWithUserWithYosokaWithJo[]
  > {
    const sheetList$ = this.getSheetList();
    return sheetList$.pipe(
      switchMap((sheets) => {
        if (sheets.length) {
          return combineLatest([of(sheets), of(this.yosokaList)]);
        } else {
          return of([]);
        }
      }),
      map(([sheets, yosokas]) => {
        if (sheets.length) {
          return sheets.map((sheet: SheetWithUser) => {
            return {
              ...sheet,
              yosoka: yosokas.find((yosoka: Yosoka) => {
                return sheet?.yosokaId == yosoka?.id;
              }),
            };
          });
        } else {
          return [];
        }
      }),
      switchMap((sheets) => {
        if (sheets.length) {
          return combineLatest([of(sheets), of(this.joList)]);
        } else {
          return of([]);
        }
      }),
      map(([sheets, joes]) => {
        if (sheets.length) {
          return sheets.map((sheet: SheetWithUserWithYosoka) => {
            return {
              ...sheet,
              jo: joes.find((jo: Jo) => {
                return sheet.joId === jo.id;
              }),
            };
          });
        } else {
          return [];
        }
      })
    );
  }
}
