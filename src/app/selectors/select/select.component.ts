import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UiService } from 'src/app/services/ui.service';
import YosokaList from '../../yosoka.json';
import ShikibetuList from '../../shikibetu.json';
import JraList from '../../jra.json';
import NarList from '../../nar.json';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() type: string = 'yosoka' || 'kenshu' || 'jra' || 'nar';

  yosokaList = YosokaList;
  shikibetuList = ShikibetuList;
  jra = JraList;
  nar = NarList;

  yosokaControl = new FormControl('', Validators.required);
  jraControl = new FormControl('');
  narControl = new FormControl('');

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

    if (val === 'umaren') {
      this.uiService.isUmarenSelectorsNavOpen = true;
    }
    if (val === 'umatan') {
      this.uiService.isUmatanSelectorsNavOpen = true;
    }
    if (val === 'wide') {
      this.uiService.isWideSelectorsNavOpen = true;
    }
  }

  addShikibetuControl(): void {
    this.shikibetuControls.push(this.shikibetuControl);
  }

  removeShikibetuControl(i: number) {
    this.shikibetuControls.removeAt(i);
  }
}
