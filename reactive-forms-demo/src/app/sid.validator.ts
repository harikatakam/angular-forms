import { AbstractControl, ValidationErrors } from '@angular/forms'

export function sidValidator(control: AbstractControl): ValidationErrors | null {

  const value = control.value;

  const sidregex = /^[a-zA-Z][0-9]{6,}$/;
  if (!sidregex.test(value)) {
    return { 'invalid': true }
  }

  return null
}
