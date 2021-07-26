import { Component, OnInit } from '@angular/core';
import YosokaList from '../../yosoka.json';
import JraList from '../../jra.json';
import NarList from '../../nar.json';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { eitherRequiredValidator } from 'src/app/validators/eitherRequired.validator';
import { SheetService } from 'src/app/services/sheet.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-sheet',
  templateUrl: './create-sheet.component.html',
  styleUrls: ['./create-sheet.component.scss'],
})
export class CreateSheetComponent implements OnInit {
  yosokaList = YosokaList;
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

    this.sheetService.createSheet(this.forms.value, uid);
  }
}
