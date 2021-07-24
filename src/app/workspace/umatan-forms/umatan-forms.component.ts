import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-umatan-forms',
  templateUrl: './umatan-forms.component.html',
  styleUrls: ['./umatan-forms.component.scss'],
})
export class UmatanFormsComponent implements OnInit {
  @Input() result: number[][];

  constructor() {}

  ngOnInit(): void {}
}
