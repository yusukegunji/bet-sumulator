import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fukusho',
  templateUrl: './fukusho.component.html',
  styleUrls: ['./fukusho.component.scss'],
})
export class FukushoComponent implements OnInit {
  umaban = new Array(18).fill(1, 1, 18);
  betMoneyGroup: FormGroup = new FormGroup({
    bet: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}
}
