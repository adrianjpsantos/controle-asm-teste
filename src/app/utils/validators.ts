import { AbstractControl, ValidatorFn } from '@angular/forms';

export function destinoValidator(): ValidatorFn {
  const regex = /^(BASE|MOD1|MOD2|MOD3|MOD5|MOD6|MOD7|CF01|CF02|CF03|CF04|CF05|CF06|CF07|CF08|PL02|PL01|OFICINA)$/;
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = regex.test(control.value);
    return valid ? null : { 'invalidDestino': { value: control.value } };
  };
}

export function fornecedorValidator(): ValidatorFn {
  const regex = /^(SOTREQ|PONSSE|MECANIZZA|FORA DE ESTOQUE)$/;
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = regex.test(control.value);
    return valid ? null : { 'invalidDestino': { value: control.value } };
  };
}
