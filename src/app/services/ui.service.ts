import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  shikibetu: string = 'umaren';
  shikibetuGroup: string[] = [];

  constructor() {}
}
