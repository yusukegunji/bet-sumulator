import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  shikibetu: string;
  shikibetuGroup: string[] = [];
  isOpen: boolean;

  constructor() {}
}
