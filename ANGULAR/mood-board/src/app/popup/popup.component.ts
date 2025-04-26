import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  imports: [FormsModule, CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  @Input() isVisible: boolean = false;
  @Output() usernameSubmited = new EventEmitter<string>();
  @Output() popupClose = new EventEmitter<void>();

    username: string = "";
    submitUsername() {
        if(this.username.trim()) {
            this.usernameSubmited.emit(this.username);
            this.closePopup();
        }
    }
    closePopup() {
      // handle for close button if anyone doesn't interest to add name so add codinghero by default
      if(!this.username.trim()) {
        this.usernameSubmited.emit("CodingHero");
      }
      this.popupClose.emit();
      this.isVisible = false;
    }
}
