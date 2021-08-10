import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'src/app/interfaces/race';

@Component({
  selector: 'app-umatan-forms',
  templateUrl: './umatan-forms.component.html',
  styleUrls: ['./umatan-forms.component.scss'],
})
export class UmatanFormsComponent implements OnInit {
  @Input() races: Race[];
  @Input() result: number[][];

  constructor() {}

  ngOnInit(): void {}
}
