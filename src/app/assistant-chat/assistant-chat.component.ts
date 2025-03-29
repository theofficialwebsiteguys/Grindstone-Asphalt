import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assistant-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assistant-chat.component.html',
  styleUrls: ['./assistant-chat.component.scss'],
})
export class AssistantChatComponent {
  chatOpen = false;
  formData: any = {
    name: '',
    email: '',
    message: '',
    phone: '',
    file: null // <-- add this
  };

  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent) {
    if (this.chatOpen) this.toggleChat();
  }
  
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.formData.file = file;
    }
  }
  
  toggleChat(): void {
    this.chatOpen = !this.chatOpen;
  
    // Lock/unlock background scroll
    document.body.style.overflow = this.chatOpen ? 'hidden' : '';
  
    if (this.chatOpen) {
      setTimeout(() => {
        const chatForm = document.getElementById('chat-form');
        if (chatForm) {
          chatForm.focus();
        }
      }, 100);
    }
  }

  async sendMessage() {
    // try {
    //   await this.settingsService.sendMessage(
    //     this.formData.name,
    //     this.formData.email,
    //     this.formData.message
    //   );
    //   this.chatOpen = false;
    //   console.log('Message sent successfully!');
    // } catch (error) {
    //   console.error('Failed to send message:', error);
    // }
  }
}
