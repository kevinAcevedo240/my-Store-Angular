import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowelToNumber'
})
export class VowelToNumberPipe implements PipeTransform {

  transform(value: string): string {
    const vowelsMap: { [key: string]: string } = {
      a: '1',
      e: '2',
      i: '3',
      o: '4',
      u: '5'
    };

    return value.replace(/[aeiou]/gi, vowel => vowelsMap[vowel.toLowerCase()] || vowel);
  }

}
