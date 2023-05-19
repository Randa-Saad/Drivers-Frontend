import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetize',
})
export class AlphabetizePipe implements PipeTransform {
  name: string | undefined;

  transform(value: any): any {
    this.name = value
      .split('')
      .sort((a: string, b: any) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      )
      .join('');
    return this.name;
  }
}
