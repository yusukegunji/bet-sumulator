import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  totalBet: number = 0;
  betStockArr: number[] = [];

  constructor() {}
}
