import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Rank } from 'src/app/interfaces/rank';
import { BetService } from 'src/app/services/bet.service';
import Ranks from '../../rank.json';

@Component({
  selector: 'app-tansho',
  templateUrl: './tansho.component.html',
  styleUrls: ['./tansho.component.scss'],
})
export class TanshoComponent implements OnInit {
  ranks: Rank[] = Ranks;
  betMoneyGroup: FormGroup;

  get betForms(): FormArray {
    return this.betMoneyGroup.get('betForms') as FormArray;
  }

  // get betForm(): FormControl {
  //   return this.betForms.get('betForm') as FormControl;
  // }

  constructor(private betService: BetService, private fb: FormBuilder) {}

  buildBetForms() {
    return this.fb.group({
      betForm: [''],
    });
  }

  addBetforms() {
    this.betForms.push(this.buildBetForms());
  }

  ngOnInit(): void {
    this.betMoneyGroup = this.fb.group({
      betForms: this.fb.array([]),
    });

    this.addBetforms();
    this.betMoneyGroup.valueChanges.subscribe((val) => {
      console.log(val);
    });
    // this.betMoneyGroup.valueChanges.subscribe((val) => {
    //   let sum = 0;
    //   for (let key in val.betForms) {
    //     if (val.hasOwnProperty(key)) {
    //       sum = val[key] + sum;
    //     }
    //     console.log(sum);
    //     this.betService.totalBet = sum;
    //   }
    // });
  }

  betMoney(): void {
    // this.betService.betStockArr.push(this.betMoneyGroup.controls.bet.value);
    // let lastValue =
    //   this.betService.betStockArr[this.betService.betStockArr.length - 1];
    // this.betService.totalBet = this.betService.betStockArr.reduce(
    //   (a, b) => a + b
    // );
  }
}
