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

    this.ranks.forEach(() => {
      this.addBetforms();
    });

    this.betMoneyGroup.valueChanges.subscribe((val) => {
      let sum = 0;
      for (let key in val.betForms) {
        if (val.betForms[key].hasOwnProperty('betForm')) {
          sum = val.betForms[key].betForm + sum;
        }
        console.log(sum);
        this.betService.totalBet = sum;
      }
    });
  }
}
