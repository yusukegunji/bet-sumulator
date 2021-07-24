import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  shikibetu: string;
  shikibetuGroup: string[] = [];
  isUmarenSelectorsNavOpen: boolean;
  isUmatanSelectorsNavOpen: boolean;
  isWideSelectorsNavOpen: boolean;

  isSidenavOpen: boolean;

  constructor() {}
}
