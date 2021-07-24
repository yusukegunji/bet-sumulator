import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckService } from 'src/app/services/check.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  result$: Observable<number[][]> = this.checkService.result$;

  constructor(
    public uiService: UiService,
    private checkService: CheckService
  ) {}

  ngOnInit(): void {}
}
