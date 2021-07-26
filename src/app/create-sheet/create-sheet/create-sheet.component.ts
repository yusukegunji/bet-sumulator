import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { Yosoka } from 'src/app/interfaces/yosoka';
import { AuthService } from 'src/app/services/auth.service';
import { SheetService } from 'src/app/services/sheet.service';
import { eitherRequiredValidator } from 'src/app/validators/eitherRequired.validator';
import JraList from '../../jra.json';
import NarList from '../../nar.json';
import YosokaList from '../../yosoka.json';
@Component({
  selector: 'app-create-sheet',
  templateUrl: './create-sheet.component.html',
  styleUrls: ['./create-sheet.component.scss'],
})
export class CreateSheetComponent implements OnInit {
  yosokaList: Yosoka[] = YosokaList;
  jra = JraList;
  nar = NarList;
  isProcessing: boolean;
  user$: Observable<User> = this.authService.user$;

  forms = this.fb.group(
    {
      yosokaControl: ['', [Validators.required]],
      jraControl: [''],
      narControl: [''],
    },
    {
      validator: eitherRequiredValidator('jraControl', 'narControl'),
    }
  );

  get f() {
    return this.forms.controls;
  }

  constructor(
    private fb: FormBuilder,
    private sheetService: SheetService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  createSheet(uid: string): void {
    console.log(this.forms.value);
    const formData = this.forms.value;
    const sheetData = {
      yosokaId: formData.yosokaControl,
      joId: formData.jraControl || formData.narControl,
      uid: uid,
      createdAt: firebase.firestore.Timestamp.now(),
      updatedAt: firebase.firestore.Timestamp.now(),
    };
    console.log(sheetData);

    this.sheetService.createSheet(sheetData);
  }
}
