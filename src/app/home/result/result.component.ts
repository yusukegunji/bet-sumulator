import { Component, OnInit } from '@angular/core';
import { BetService } from 'src/app/services/bet.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  constructor(public betService: BetService) {}

  ngOnInit(): void {}
}
