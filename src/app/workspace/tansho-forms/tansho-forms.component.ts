import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
export class TanshoFormsComponent implements OnInit, AfterViewInit {
  @Input() jo: Jo;
  ranks: Rank[] = Ranks;
  betMoneyGroup: FormGroup;
  winRaces$: Observable<Race[]>;
  winRaces: number[] = [];
  venue$: Observable<Jo>;
  raceCount: number;
  appearanceRate: number;
  appearanceRates: number[] = [];
  totalDividendArr: number[] = [];
  avgDividendArr: number[] = [];

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

    this.raceService.getVenue(this.jo.id).subscribe((venue) => {
      this.raceCount = venue.raceCount;
    });

    this.ranks.forEach((rank) => {
      this.addBetforms();
    });

    this.betMoneyGroup.valueChanges.subscribe((val) => {
      let sum: number = 0;
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
      }
    });
  }

  ngAfterViewInit() {
    this.ranks.forEach((rank, i) => {
      this.raceService
        .getWinRaces(rank.index, this.jo.id)
        .pipe(
          map((races) => {
            const winNumOfAppears = races.length;
            this.appearanceRate =
              Math.floor((winNumOfAppears / this.raceCount) * 100 * 10) / 10;

            this.appearanceRates.push(this.appearanceRate);
            this.winRaces.push(winNumOfAppears);

            this.totalDividendArr[i] = races.reduce(
              (sum, i2) => sum + i2.tansho1,
              0
            );

            this.totalDividendArr.forEach((total) => {
              console.log(total);
              console.log(winNumOfAppears);

              this.avgDividendArr[i] =
                (Math.floor(total / winNumOfAppears) * 10) / 10;
            });

            console.log(this.avgDividendArr);
          })
        )
        .subscribe();
    });
  }
}
