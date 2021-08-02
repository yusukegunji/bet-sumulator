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
import * as Handsontable from 'handsontable';
import * as numbro from 'numbro';
import * as languages from 'numbro/dist/languages.min';
import { RaceService } from 'src/app/services/race.service';
import { Race } from 'src/app/interfaces/race';

numbro.default.registerLanguage(languages['ja-JP']);

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
  settings;

  dataset: any[] = [
    { id: 1, name: 'Ted Right', address: 'Wall Street' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
  ];

  constructor(
    public uiService: UiService,
    private checkService: CheckService,
    private sheetService: SheetService,
    private route: ActivatedRoute,
    private raceService: RaceService
  ) {}

  ngOnInit(): void {
    this.sheet$.subscribe((sheet) => {
      this.sheet = sheet;
      this.yosoka = this.yosokaList.find((data) => data.id === sheet.yosokaId);
      this.jo = this.joList.find((jo) => {
        return jo.id === sheet.joId;
      });
    });

    this.settings = {
      data: this.dataset,
      columns: [
        {
          data: 'id',
          type: 'numeric',
          width: 40,
        },
        {
          data: 'currency',
          type: 'text',
        },
        {
          data: 'level',
          type: 'numeric',
          numericFormat: {
            pattern: '0.0000',
          },
        },
        {
          data: 'units',
          type: 'text',
        },
        {
          data: 'asOf',
          type: 'date',
          dateFormat: 'MM/DD/YYYY',
        },
        {
          data: 'onedChng',
          type: 'numeric',
          numericFormat: {
            pattern: '0.00%',
          },
        },
      ],
      stretchH: 'all',
      width: 924,
      autoWrapRow: true,
      height: 487,
      maxRows: 22,
      manualRowResize: true,
      manualColumnResize: true,
      rowHeaders: true,
      colHeaders: ['ID', 'Currency', 'Level', 'Units', 'Date', 'Change'],
      manualRowMove: true,
      manualColumnMove: true,
      contextMenu: true,
      filters: true,
      dropdownMenu: true,
    };
  }
}
