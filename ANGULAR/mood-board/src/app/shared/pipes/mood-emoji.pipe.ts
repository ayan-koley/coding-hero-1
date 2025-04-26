import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moodEmoji'
})
export class MoodEmojiPipe implements PipeTransform {

  transform(mood: string): string {
    // Why object doesn't work here:
    // In TypeScript, the object type means:
    // “some non-primitive value, but I don't know what's inside it.”
    // That means you can't access any properties directly — not even dynamically — without a type error
      const moodEmojis: {[key: string]: string} = {
        'Happy': '😃',
        'Sad' : '🥺',
        'Angry': '😠',
        'Calm': '😊',
        'Excited' : '😃'
      }
      return moodEmojis[mood] || "";
  }

}
