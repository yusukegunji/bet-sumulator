import { Component, OnInit } from '@angular/core';
import YosokaList from '../../yosoka.json';
import JraList from '../../jra.json';
import NarList from '../../nar.json';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { eitherRequiredValidator } from 'src/app/validators/eitherRequired.validator';
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  createSheet(): void {
    console.log(this.forms.value);
  }
}
