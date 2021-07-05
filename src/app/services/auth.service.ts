import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isProcessing: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router
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
}
