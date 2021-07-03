import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tansho',
  templateUrl: './tansho.component.html',
  styleUrls: ['./tansho.component.scss'],
})
export class TanshoComponent implements OnInit {
  umaban = new Array(18).fill(1, 1, 18);
  betMoneyGroup: FormGroup = new FormGroup({
    bet: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}
}
