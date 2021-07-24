import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckService {
  firstChoices: number[] = [];
  secondChoices: number[] = [];

  result: number[][] = [];
  resultSubject: Subject<number[][]> = new BehaviorSubject<number[][]>(null);
  result$: Observable<number[][]> = this.resultSubject.asObservable();

  constructor() {}

  createResult() {
    if (this.result.length > 0) {
      this.initResultSubject();
    }

    this.firstChoices.forEach((v1) => {
      this.secondChoices.forEach((v2) => {
        if (v1 !== v2) {
          this.result.push([v1, v2]);
        }
      });
    });

    const newResult = this.result.filter((elem, i, arr) => {
      return !this.result.some((elem2, i2) => {
        if (arr.length === 0) {
          return elem;
        } else {
          return i > i2 && elem2[0] == elem[0] && elem2[1] == elem[1];
        }
      });
    });

    this.resultSubject.next(newResult);
  }

  initResultSubject() {
    this.result = [];
  }

  combineChecked(...array) {
    const make = (arr1, arr2) => {
      if (arr1.length === 0) {
        return arr2;
      }
      return arr1.reduce((arr, v1) => {
        arr2.forEach((v2) => {
          const group = [].concat(v1, v2);
          arr.push(group);
        });
        return arr;
      }, []);
    };
    return array.reduce(make, []);
  }
}
