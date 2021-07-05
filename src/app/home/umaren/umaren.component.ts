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

  get rankChecks() {
    return this.formGroup.get('rankChecks') as FormArray;
  }

  formGroup = new FormGroup({
    rankChecks: new FormArray([
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
