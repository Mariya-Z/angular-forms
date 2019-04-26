import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static serviceLevel(c: AbstractControl): { [key: string]: boolean } | null {
    console.log('Validator: serviceLevel is called');
    if (
      c.value !== undefined &&
      (Number.isNaN(c.value) || c.value < 1 || c.value > 5)
    ) {
      return {
        serviceLevel: true,
      };
    }
    return null;
  }

  static serviceLevelRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (
        c.value !== undefined &&
        (Number.isNaN(c.value) || c.value < min || c.value > max)
      ) {
        return {
          serviceLevel: true,
        };
      }
      return null;
    };
  }
}
