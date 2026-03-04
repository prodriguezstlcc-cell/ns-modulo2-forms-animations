import { Directive } from '@angular/core';
import {
  Validator,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS
} from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordValidatorDirective,
    multi: true
  }]
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const val = control.value || '';
    if (val.length < 8) {
      return { weakPassword: { message: 'Mínimo 8 caracteres' } };
    }
    if (!/[A-Z]/.test(val)) {
      return { weakPassword: { message: 'Debe tener al menos una mayúscula' } };
    }
    if (!/[0-9]/.test(val)) {
      return { weakPassword: { message: 'Debe tener al menos un número' } };
    }
    return null;
  }
}
