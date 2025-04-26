import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  monthMoodData = [
    { date: '1st', moodClass: 'bg-green-500' },  // Good mood
    { date: '2nd', moodClass: 'bg-yellow-500' }, // Neutral mood
    { date: '3rd', moodClass: 'bg-red-500' },    // Bad mood
    { date: '4th', moodClass: 'bg-green-500' },  // Good mood
    { date: '5th', moodClass: 'bg-yellow-500' }, // Neutral mood
    { date: '6th', moodClass: 'bg-red-500' },    // Bad mood
    // Add more days as needed
  ];
}
