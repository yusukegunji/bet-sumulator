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
  firstChoice: number[] = [];
  secondChoice: number[] = [];

  // checksGroup: FormGroup = this.fb.group({
  //   first: this.fb.array([]),
  //   second: this.fb.array([]),
  // });

  get checkForms() {
    return this.formGroup.get('checkForms') as FormArray;
  }

  get first(): FormArray {
    return this.checkForms.get('first') as FormArray;
  }

  get second(): FormArray {
    return this.checkForms.get('second') as FormArray;
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

  checkFirst(ranki: number) {
    console.log(ranki);
    this.firstChoice.push(ranki);
    console.log('1頭目', this.firstChoice);
  }

  checkSecond(ranki: number) {
    console.log(ranki);
    this.secondChoice.push(ranki);
    console.log('2頭目', this.secondChoice);
  }
}
