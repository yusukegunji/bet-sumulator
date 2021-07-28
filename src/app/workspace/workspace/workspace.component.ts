import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import deepmerge from 'deepmerge';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Jo } from 'src/app/interfaces/jo';
import { Sheet } from 'src/app/interfaces/sheet';
import { Yosoka } from 'src/app/interfaces/yosoka';
import { CheckService } from 'src/app/services/check.service';
import { SheetService } from 'src/app/services/sheet.service';
import { UiService } from 'src/app/services/ui.service';
import JraList from '../../jra.json';
import NarList from '../../nar.json';
import YosokaList from '../../yosoka.json';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  result$: Observable<number[][]> = this.checkService.result$;
  sheet$: Observable<Sheet> = this.route.paramMap.pipe(
    switchMap((param) => {
      const sheetId = param.get('id');
      return this.sheetService.getSheet(sheetId);
    })
  );
  yosokaList: Yosoka[] = YosokaList;
  joList = deepmerge(JraList, NarList);
  sheet: Sheet;
  yosoka: Yosoka;
  jo: Jo;

  constructor(
    public uiService: UiService,
    private checkService: CheckService,
    private sheetService: SheetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sheet$.subscribe((sheet) => {
      this.sheet = sheet;
      this.yosoka = this.yosokaList.find((data) => data.id === sheet.yosokaId);
      this.jo = this.joList.find((jo) => jo.id === sheet.joId);
    });
  }
}
