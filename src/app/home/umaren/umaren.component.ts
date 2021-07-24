import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Rank } from 'src/app/interfaces/rank';
import { CheckService } from 'src/app/services/check.service';
import { UiService } from 'src/app/services/ui.service';
import Ranks from '../../rank.json';

@Component({
  selector: 'app-umaren',
  templateUrl: './umaren.component.html',
  styleUrls: ['./umaren.component.scss'],
})
export class UmarenComponent implements OnInit {
  ranks: Rank[] = Ranks;

  get checkForms() {
    return this.formGroup.get('checkForms') as FormArray;
  }

  formGroup = new FormGroup({
    checkForms: new FormArray([]),
  });

  constructor(
    private fb: FormBuilder,
    public uiService: UiService,
    private checkService: CheckService,
    private cd: ChangeDetectorRef
  ) {}

  buildCheckForms() {
    return this.fb.group({
      first: [''],
      second: [''],
    });
  }

  addCheckForms() {
    this.checkForms.push(this.buildCheckForms());
  }

  ngOnInit(): void {
    this.ranks.forEach(() => {
      this.addCheckForms();
    });
  }

  checkFirst(event: { checked: boolean }, i: number) {
    if (event.checked) {
      this.checkService.firstChoices.push(i);
      this.checkService.createResult();
    }
    if (!event.checked) {
      const newFirstChoice = this.checkService.firstChoices.filter(
        (n) => n !== i
      );
      this.checkService.firstChoices = newFirstChoice;
      this.checkService.createResult();
    }
  }

  checkSecond(event: { checked: boolean }, i: number) {
    if (event.checked) {
      this.checkService.secondChoices.push(i);
      this.checkService.createResult();
    }
    if (!event.checked) {
      const newSecondChoices = this.checkService.secondChoices.filter(
        (n) => n !== i
      );
      this.checkService.secondChoices = newSecondChoices;
      this.checkService.createResult();
    }
  }
}
