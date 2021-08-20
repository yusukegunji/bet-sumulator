import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import deepmerge from 'deepmerge';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
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
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

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
  user$: Observable<User> = this.authService.user$;
  yosokaList: Yosoka[] = YosokaList;
  joList = deepmerge(JraList, NarList);
  sheet: Sheet;
  yosoka: Yosoka;
  jo: Jo;
  settings;
  races$: Observable<Race[]>;
  venue$: Observable<Jo>;

  constructor(
    public uiService: UiService,
    private checkService: CheckService,
    private sheetService: SheetService,
    private route: ActivatedRoute,
    private raceService: RaceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.sheet$.subscribe((sheet) => {
      this.sheet = sheet;
      this.yosoka = this.yosokaList.find((data) => data.id === sheet.yosokaId);
      this.jo = this.joList.find((jo) => {
        return jo.id === sheet.joId;
      });
      this.venue$ = this.raceService.getVenue(this.jo.id).pipe(take(1));
      this.races$ = this.raceService.getRacesByJoId(this.jo.id).pipe(take(1));
    });
  }
}
