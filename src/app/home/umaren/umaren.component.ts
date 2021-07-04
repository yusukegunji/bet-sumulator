import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Rank } from 'src/app/interfaces/rank';
import Ranks from '../../rank.json';

@Component({
  selector: 'app-umaren',
  templateUrl: './umaren.component.html',
  styleUrls: ['./umaren.component.scss'],
})
export class UmarenComponent implements OnInit {
  ranks: Rank[] = Ranks;
  betMoneyGroup: FormGroup = new FormGroup({
    bet: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    console.log(Ranks);
  }
}
