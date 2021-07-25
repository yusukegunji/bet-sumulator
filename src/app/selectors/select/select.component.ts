import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { UiService } from 'src/app/services/ui.service';
import ShikibetuList from '../../shikibetu.json';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() type: string = 'yosoka' || 'jra' || 'nar' || 'shikibetu';
  shikibetuList = ShikibetuList;
  formGroup: FormGroup;

  get shikibetuControl(): FormGroup {
    return this.fb.group({
      shikibetuControl: [''],
    });
  }

  get shikibetuControls(): FormArray {
    return this.formGroup.get('shikibetuControls') as FormArray;
  }

  constructor(public uiService: UiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      shikibetuControls: this.fb.array([this.shikibetuControl]),
    });
  }

  setShikibetu(i: number) {
    const val = this.shikibetuControls.controls[i].value.shikibetuControl;
    this.uiService.shikibetuGroup[i] = val;
    this.uiService.shikibetu = val;

    if (val === ('umaren' || 'umatan' || 'wide')) {
      this.uiService.isTwoHorseOptionNavOpen = true;
    } else {
      this.uiService.isTwoHorseOptionNavOpen = false;
    }
  }

  addShikibetuControl(): void {
    this.shikibetuControls.push(this.shikibetuControl);
  }

  removeShikibetuControl(i: number) {
    this.shikibetuControls.removeAt(i);
  }
}
