import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { switchMap, take } from 'rxjs/operators';
import { UserService } from './user.service';
import { UiService } from './ui.service';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isProcessing: boolean = false;
  afUser$;
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
    private userService: UserService,
    private uiService: UiService,
    private fns: AngularFireFunctions
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

  async createUser(params: { email: string; password: string }): Promise<void> {
    this.isProcessing = true;
    this.afAuth
      .createUserWithEmailAndPassword(params.email, params.password)
      .then((result) => {
        result.user.sendEmailVerification();
      })
      .finally(() => {
        alert(
          'メールを送信しました。ログインするにはメールアドレスの確認を完了してください。'
        );
      })
      .catch((error) => {
        this.isProcessing = false;
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('このアドレスは既に登録されています。');
            break;
          case 'auth/invalid-email':
            alert('メールアドレスが不正です');
            break;
        }
      });
    this.isProcessing = false;
  }

  async signinWithEmail(params: {
    email: string;
    password: string;
  }): Promise<void> {
    return this.afAuth
      .signInWithEmailAndPassword(params.email, params.password)
      .finally(() => {
        if (
          this.afUser$.pipe(take(1)).subscribe((user) => user.emailVerified)
        ) {
          this.router.navigate(['/add-books']);
          this.uiService.isLoading = false;
        } else {
          this.uiService.isLoading = false;
          return;
        }
      })
      .catch((error) => {
        this.uiService.isLoading = false;
        switch (error.code) {
          case 'auth/user-not-found':
            alert('このメールアドレスのユーザーは見つかりません');
            break;
          case 'auth/wrong-password':
            alert('パスワードが間違っています');
            break;
          case 'auth/invalid-email':
            alert(
              '有効なアカウントではありません。、送られたメールから認証を完了してください。'
            );
            break;
        }
      })
      .then(() => {
        return;
      });
  }

  async deleteUser(uid: string): Promise<void> {
    this.uiService.isLoading = true;
    const callable = this.fns.httpsCallable('deleteAfUser');
    return callable(uid)
      .toPromise()
      .then(() => {
        this.router.navigateByUrl('/welcome');
        this.snackBar.open('削除が完了しました');
      })
      .catch((err) => {
        console.log(err);
        this.snackBar.open(
          '削除に失敗しました。もう一度退会を実行してください'
        );
      })
      .finally(() => {
        this.uiService.isLoading = false;
      });
  }
}
