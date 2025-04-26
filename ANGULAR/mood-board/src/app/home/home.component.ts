import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoodMessageDirective } from '../shared/directives/mood-message.directive';
import { MoodEmojiPipe } from '../shared/pipes/mood-emoji.pipe';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, PopupComponent, MoodEmojiPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  moods = [
    { name: 'Happy', color: 'bg-yellow-400', shadowClr: 'shadow-yellow-400/50' },
    { name: 'Sad', color: 'bg-blue-500', shadowClr: 'shadow-blue-500/50' },
    { name: 'Angry', color: 'bg-red-600', shadowClr: 'shadow-red-600/50' },
    { name: 'Calm', color: 'bg-teal-400', shadowClr: 'shadow-teal-400/50' },
    { name: 'Excited', color: 'bg-pink-400', shadowClr: 'shadow-pink-400/50' }
  ]
  username: string = "";
  selectedMood: string = '';
  showMood: boolean = false;
  isMoodMessageVisible: boolean = false;
  moodMessage: string = '';
  showUsernamePopup: boolean = true;

  constructor() {}

  setMood(mood: string): void{
    console.log("mood is called", mood);
    if(mood.trim() !== '') {
      this.selectedMood = mood;
      this.showMood = true;
      const moodMessageDirectives = new MoodMessageDirective();
      moodMessageDirectives.mood = this.selectedMood;
      this.moodMessage = moodMessageDirectives.getMoodMessage();
      if(this.moodMessage?.trim()) {
        this.isMoodMessageVisible = true;
      }
    }
  }

  ngOnInit() {
      const savedUsername = localStorage.getItem('moodBoardUsername');
      if(savedUsername) {
        this.showUsernamePopup = false;
        this.username = savedUsername;
      }
  }

  handleUsername(name: string) {
    console.log(name);
    this.username = name;
    localStorage.setItem("moodBoardUsername", name);
  }

  handlePopupClose() {
    this.showUsernamePopup = false;
  }

}
