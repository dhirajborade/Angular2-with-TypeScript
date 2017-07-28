import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasing'
})
export class TitleCasingPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ');
    for (var index = 0; index < words.length; index++) {
      if (index > 0 && this.isPreposition(words[index]))
        words[index] = words[index].toLowerCase();
      else
        words[index] = this.toTitleCase(words[index]);
    }
    return words.join(' ');
  }

  private toTitleCase(word: string):string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ]
    return prepositions.includes(word.toLowerCase());
  }
}
