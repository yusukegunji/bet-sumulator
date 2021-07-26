import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  shikibetu: string;
  shikibetuGroup: string[] = [];
  isTwoHorseOptionNavOpen: boolean;
  isTreeHorseOptionNavOpen: boolean;

  isSidenavOpen: boolean;

  isLoading: boolean;

  constructor() {}
}
