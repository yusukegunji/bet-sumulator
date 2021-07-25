import { FormGroup, ValidatorFn } from '@angular/forms';

export function eitherRequiredValidator(jra: string, nar: string) {
  return (formGroup: FormGroup) => {
    const jraControl = formGroup.controls[jra];
    const narControl = formGroup.controls[nar];
    if (!jraControl.value && !narControl.value) {
      narControl.setErrors({ eitherRequired: true });
      jraControl.setErrors({ eitherRequired: true });
    } else {
      narControl.setErrors(null);
      jraControl.setErrors(null);
    }
  };
}
{
}
