import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckService } from 'src/app/services/check.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  result$: Observable<number[][]> = this.checkService.result$;
  constructor(public uiService: UiService, public checkService: CheckService) {}

  ngOnInit(): void {
    console.log(this.checkService.result$);
  }
}
