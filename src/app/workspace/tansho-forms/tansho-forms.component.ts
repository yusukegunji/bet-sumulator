import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { Jo } from 'src/app/interfaces/jo';
import { Race } from 'src/app/interfaces/race';
import { Rank } from 'src/app/interfaces/rank';
import { BetService } from 'src/app/services/bet.service';
import { RaceService } from 'src/app/services/race.service';
import Ranks from '../../rank.json';

@Component({
  selector: 'app-tansho-forms',
  templateUrl: './tansho-forms.component.html',
  styleUrls: ['./tansho-forms.component.scss'],
})
export class TanshoFormsComponent implements OnInit {
  @Input() races: Race[];
  @Input() jo: Jo;
  @Input() venue: Jo;
  ranks: Rank[] = Ranks;
  betMoneyGroup: FormGroup;
  winRaces$: Observable<Race[]>;
  winRaces: Race[][] = [[]];
  winNumOfAppearsArr: number[] = [];
  venue$: Observable<Jo>;
  raceCount: number;
  appearanceRate: number;
  appearanceRates: number[] = [];
  totalDividendArr: number[] = [];
  avgDividendArr: number[] = [];
  expectationArr: number[] = [];
  winningNumArr: number[] = [];

  get betForms(): FormArray {
    return this.betMoneyGroup.get('betForms') as FormArray;
  }

  constructor(
    private betService: BetService,
    private fb: FormBuilder,
    private raceService: RaceService
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
    this.betMoneyGroup = this.fb.group({
      betForms: this.fb.array([]),
    });

    this.raceCount = this.venue.raceCount;

    this.ranks.forEach((rank, i) => {
      this.addBetforms();
      this.winRaces[i] = this.races.filter((race) => {
        return race.res1 === rank.index;
      });

      const winNumOfAppears = this.winRaces[i].length;
      this.winNumOfAppearsArr.push(winNumOfAppears);
      this.appearanceRate =
        Math.floor((winNumOfAppears / this.raceCount) * 100 * 10) / 10;

      this.appearanceRates.push(this.appearanceRate);

      this.totalDividendArr[i] = this.winRaces[i].reduce(
        (sum, race) => sum + race.tansho1,
        0
      );

      this.totalDividendArr.forEach((total) => {
        if (winNumOfAppears === 0) {
          return;
        }

        this.avgDividendArr[i] =
          (Math.floor(total / winNumOfAppears) * 10) / 10;

        this.expectationArr[i] =
          Math.floor(
            this.avgDividendArr[i] * (this.appearanceRates[i] / 100) * 10
          ) / 10;
      });
    });

    this.betMoneyGroup.valueChanges.subscribe((val) => {
      let sum: number = 0;
      this.betService.totalDividendArr = [];
      this.betService.totalAvgDividendArr = [];
      for (let key in val.betForms) {
        if (val.betForms[key].betForm > 0) {
          sum = val.betForms[key].betForm + sum;
          this.betService.betStockArr[0] = sum;
          this.betService.totalBet = this.betService.betStockArr.reduce(
            (a: number, b: number) => {
              return a + b;
            }
          );
        }
        if (val.betForms[key].betForm > 0) {
          this.winRaces[key].forEach((winRace: Race) => {
            if (this.betService.winningRacesArr.includes(winRace)) {
              return;
            } else {
              this.betService.winningRacesArr.push(winRace);
            }
          });
        }
        if (val.betForms[key].betForm === 0) {
          this.betService.winningRacesArr.splice(
            Number(key),
            this.winNumOfAppearsArr[key]
          );
          this.betService.totalDividendArr.splice(Number(key), 1);
          this.betService.totalAvgDividendArr[key] = 0;
        }

        this.betService.winningRate =
          Math.floor(
            (this.betService.winningRacesArr.length / this.raceCount) * 1000
          ) / 10;

        if (val.betForms[key].betForm > 0) {
          this.betService.totalAvgDividendArr.push(
            val.betForms[key].betForm * this.avgDividendArr[key]
          );

          if (!this.betService.totalAvgDividendArr[key]) {
            this.betService.totalDividendArr.push(null);
          } else {
            this.betService.totalDividendArr.push(
              this.betService.totalAvgDividendArr[key] *
                this.winNumOfAppearsArr[key]
            );
          }
        }

        if (this.betService.totalAvgDividendArr) {
          this.betService.totalRecoveryNum =
            this.betService.totalDividendArr?.reduce((sum, value) => {
              return sum + value;
            }, 0);
        }

        this.betService.recoveryRate =
          Math.floor(
            (this.betService.totalRecoveryNum /
              (this.raceCount * this.betService.totalBet)) *
              10
          ) / 10;
      }
    });
  }
}
