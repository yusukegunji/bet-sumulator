import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { SheetWithUserWithYosokaWithJo } from 'src/app/interfaces/sheet';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sheetList$: Observable<SheetWithUserWithYosokaWithJo[]> =
    this.sheetService.getSheetListWithUserWithYosokaWithJo();
  ratestSheetList: SheetWithUserWithYosokaWithJo[];
  user$: Observable<firebase.default.User> = this.afAuth.user;
  uid: string;

  constructor(
    private sheetService: SheetService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.uid = user.uid;
    });

    this.sheetList$.subscribe((sheets) => {
      this.ratestSheetList = sheets.filter((sheet) => {
        return sheet.updatedUid === this.uid;
      });
    });
  }

  navigate(sheetId: string): void {
    this.router.navigateByUrl(`/workspace/${sheetId}`);
  }
}
