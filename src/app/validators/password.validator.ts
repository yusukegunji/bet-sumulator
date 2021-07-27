import { AbstractControl, ValidationErrors } from '@angular/forms';

const regex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/;

export class PasswordValidators {
  static password(control: AbstractControl): ValidationErrors | null {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    return regex.test(control.value) ? null : { password: true };
  }
}

function isEmptyInputValue(val: any): boolean {
  return val == null || val.length === 0;
}
