import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Rank } from 'src/app/interfaces/rank';
import Ranks from '../../rank.json';

@Component({
  selector: 'app-umaren',
  templateUrl: './umaren.component.html',
  styleUrls: ['./umaren.component.scss'],
})
export class UmarenComponent implements OnInit {
  ranks: Rank[] = Ranks;

  // checksGroup: FormGroup = this.fb.group({
  //   first: this.fb.array([]),
  //   second: this.fb.array([]),
  // });

  // get first(): FormArray {
  //   return this.checksGroup.get('first') as FormArray;
  // }

  // get second(): FormArray {
  //   return this.checksGroup.get('second') as FormArray;
  // }

  get checkForms() {
    return this.formGroup.get('checkForms') as FormArray;
  }

  formGroup = new FormGroup({
    checkForms: new FormArray([
      new FormGroup({
        first: new FormControl(false),
        second: new FormControl(false),
      }),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  check() {}
}
