import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moodEmojis'
})
export class MoodEmojisPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
