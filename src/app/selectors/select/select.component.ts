import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() type: string = 'yosoka' || 'kenshu' || 'jra' || 'nar';

  yosokas = [
    { value: 'ai_escape', viewValue: 'Aiエスケープ' },
    { value: 'hiyoko', viewValue: 'HIYOKO' },
    { value: 'shuuya', viewValue: 'シューヤ' },
    { value: 'rena', viewValue: 'RENA' },
  ];

  kenshues = [
    { value: 'tansho', viewValue: '単勝' },
    { value: 'fukusho', viewValue: '複勝' },
    { value: 'wide', viewValue: 'ワイド' },
    { value: 'umaren', viewValue: '馬連' },
    { value: 'umatan', viewValue: '馬単' },
    { value: 'sanpuku', viewValue: '3連複' },
    { value: 'santan', viewValue: '3連単' },
  ];

  jra = [
    { value: '01', viewValue: '札幌' },
    { value: '02', viewValue: '函館' },
    { value: '03', viewValue: '福島' },
    { value: '04', viewValue: '新潟' },
    { value: '05', viewValue: '東京' },
    { value: '06', viewValue: '中山' },
    { value: '07', viewValue: '中京' },
    { value: '08', viewValue: '京都' },
    { value: '09', viewValue: '阪神' },
    { value: '10', viewValue: '小倉' },
  ];

  nar = [
    { value: '30', viewValue: '門別' },
    { value: '35', viewValue: '盛岡' },
    { value: '36', viewValue: '水沢' },
    { value: '42', viewValue: '浦和' },
    { value: '43', viewValue: '船橋' },
    { value: '44', viewValue: '大井' },
    { value: '45', viewValue: '川崎' },
    { value: '46', viewValue: '金沢' },
    { value: '47', viewValue: '笠松' },
    { value: '48', viewValue: '名古屋' },
    { value: '50', viewValue: '園田' },
    { value: '51', viewValue: '姫路' },
    { value: '54', viewValue: '高知' },
    { value: '55', viewValue: '佐賀' },
  ];

  yosokaControl = new FormControl('', Validators.required);
  kenshuControl = new FormControl('');
  jraControl = new FormControl('');
  narControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
