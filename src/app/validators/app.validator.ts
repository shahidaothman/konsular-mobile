import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * confirmPasswordValidator
 * @param controls
 * @description use to confirm password. validation
 */
export function confirmPasswordValidator(
  controls: AbstractControl
): { [key: string]: boolean } | null {
  // get the required control
  const firstControl = controls.get('password');
  const lastControl = controls.get('confirmPassword');
  // if both the controls are pristine (user not interacted with control) then return null
  if (firstControl.pristine || lastControl.pristine) {
    return null;
  }

  // if value of both controls match then return misMatch true else null
  return firstControl.value !== lastControl.value ? { misMatch: true } : null;
}

/**
 * patternValidator
 * @param control formControl
 * @description use for pattern. validation
 */
export function patternValidator(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (!control.value || control.value === '') return null;
    // return regex.test(control.value) ? null : { AppPattern: true };
    return control.value.toString().match(regex) ? null : { AppPattern: true };
  };
}
