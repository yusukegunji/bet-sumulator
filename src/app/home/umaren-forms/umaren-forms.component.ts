import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Rank } from 'src/app/interfaces/rank';
import { BetService } from 'src/app/services/bet.service';
import { CheckService } from 'src/app/services/check.service';
import Ranks from '../../rank.json';

@Component({
  selector: 'app-umaren-forms',
  templateUrl: './umaren-forms.component.html',
  styleUrls: ['./umaren-forms.component.scss'],
})
export class UmarenFormsComponent implements OnInit {
  @Input() result: number[][];
  ranks: Rank[] = Ranks;
  betMoneyGroup: FormGroup;

  get betForms(): FormArray {
    return this.betMoneyGroup.get('betForms') as FormArray;
  }

  constructor(
    private betService: BetService,
    public fb: FormBuilder,
    public checkService: CheckService,
    private cd: ChangeDetectorRef
  ) {}

  buildBetForms() {
    return this.fb.group({
      betForm: [''],
    });
  }

  addBetforms() {
    this.betForms.push(this.buildBetForms());
  }

  ngOnInit(): void {
    console.log(this.result);

    this.betMoneyGroup = this.fb.group({
      betForms: this.fb.array([]),
    });

    this.addBetforms();

    this.betMoneyGroup.valueChanges.subscribe((val) => {
      let sum: number = 0;
      for (let key in val.betForms) {
        if (val.betForms[key].betForm > 0) {
          sum = val.betForms[key].betForm + sum;
          this.betService.betStockArr[3] = sum;
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
