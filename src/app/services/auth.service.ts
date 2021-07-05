import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isProcessing: boolean = false;
  user$: Observable<User> = this.afAuth.authState.pipe(
    switchMap((afUser) => {
      if (afUser) {
        return this.userService.getUserData(afUser.uid);
      } else {
        return of(null);
      }
    })
  );

  constructor(
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router,
    private userService: UserService
  ) {}

  async googleLogin(): Promise<void> {
    this.isProcessing = true;
    const provider = new firebase.default.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    this.afAuth
      .signInWithPopup(provider)
      .then(() => {
        this.snackBar.open('ログインしました');
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log('failed to sign in');
        console.error(error);
      })
      .finally(() => (this.isProcessing = false));
  }

  async logout(): Promise<void> {
    this.afAuth
      .signOut()
      .then(() => {
        this.router.navigateByUrl('/welcome');
      })
      .then(() => {
        this.snackBar.open('ログアウトしました');
      });
  }
}
