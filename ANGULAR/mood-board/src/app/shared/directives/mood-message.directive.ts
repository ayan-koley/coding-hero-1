import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appMoodMessage]'
})
export class MoodMessageDirective {
  @Input() mood:string = '';
  moodMessages: any = {
    'Happy': 'Full of energy like RCB after a victory — unstoppable!',
    'Sad': 'Sad now, but RCB always bounces back stronger — we rise again!',
    'Angry': 'Channel that RCB fire and turn it into power!',
    'Calm': 'Calm like Virat Kohli in the final overs — ready for anything!',
    'Excited': 'RCB fans after a big win — let’s gooo!'
  };
  
  constructor() { }

  getMoodMessage() {
    if(this.mood && this.moodMessages[this.mood]) {
      return this.moodMessages[this.mood];
    }
  }

}
