import { Component, Input, OnInit } from '@angular/core';
import { Jo } from 'src/app/interfaces/jo';
import { Sheet } from 'src/app/interfaces/sheet';
import { Yosoka } from 'src/app/interfaces/yosoka';
import { BetService } from 'src/app/services/bet.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() sheet: Sheet;
  @Input() yosoka: Yosoka;
  @Input() jo: Jo;
  constructor(public betService: BetService) {}

  ngOnInit(): void {}
}
