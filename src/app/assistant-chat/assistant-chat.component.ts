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

  constructor(private http: HttpClient) {}

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
    const formData = new FormData();
    formData.append('name', this.formData.name || '');
    formData.append('email', this.formData.email || '');
    formData.append('phone', this.formData.phone || '');
    formData.append('proposal', this.formData.message || ''); // matches the backend's "proposal"
    formData.append('businessEmail', 'gsealcoating@gmail.com'); // Replace with your target
  
    if (this.formData.file) {
      formData.append('file', this.formData.file);
    }
  
    try {
      await this.http.post('https://twg-template-submission-92b1532f00c1.herokuapp.com/send-email-universal', formData).toPromise();
      alert('Message sent!');
      this.chatOpen = false;
  
      // Reset form
      this.formData = {
        name: '',
        email: '',
        message: '',
        phone: '',
        file: null
      };
  
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (error) {
      alert('Failed to send message.');
      console.error('Failed to send message:', error);
    }
  }
  
}
