import { Component, Input, OnInit } from '@angular/core';
import { Sheet } from 'src/app/interfaces/sheet';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-shikibetu-selectors',
  templateUrl: './shikibetu-selectors.component.html',
  styleUrls: ['./shikibetu-selectors.component.scss'],
})
export class ShikibetuSelectorsComponent implements OnInit {
  @Input() sheet: Sheet;
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
}
