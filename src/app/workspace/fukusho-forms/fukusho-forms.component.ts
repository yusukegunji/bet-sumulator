import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Rank } from 'src/app/interfaces/rank';
import { BetService } from 'src/app/services/bet.service';
import Ranks from '../../rank.json';

@Component({
  selector: 'app-fukusho-forms',
  templateUrl: './fukusho-forms.component.html',
  styleUrls: ['./fukusho-forms.component.scss'],
})
export class FukushoFormsComponent implements OnInit {
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
      let sum: number = 0;
      for (let key in val.betForms) {
        if (val.betForms[key].betForm > 0) {
          sum = val.betForms[key].betForm + sum;
          this.betService.betStockArr[1] = sum;
          this.betService.totalBet = this.betService.betStockArr.reduce(
            (a: number, b: number) => {
              return a + b;
            }
          );
        }
      }
    });
  }
}
