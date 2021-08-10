import { Injectable } from '@angular/core';
import { Race } from '../interfaces/race';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  totalBet: number = 0;
  betStockArr: number[] = [];

  betNum: number = 0;
  winningRate: number = 0;
  winningRacesArr: Race[] = [];

  totalAvgDividendArr: number[] = [];
  totalDividendArr: number[] = [];
  totalRecoveryNum: number = 0;
  recoveryRate: number = 0;
  constructor() {}
}
