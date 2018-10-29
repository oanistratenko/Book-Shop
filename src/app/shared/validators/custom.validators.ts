import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static dDateRange(minDate: Date, maxDate: Date): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value !== undefined && (c.value < minDate || c.value > maxDate)) {
        return {
          dDateRange: true
        };
      }
      return null;
    };
  }
}
