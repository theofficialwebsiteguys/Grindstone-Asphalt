import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormBuilder } from "@angular/forms";
import { HeroComponent } from "../hero/hero.component";
import { Validators } from '@angular/forms';
import { JobberService } from "../jobber.service";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeroComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  selectedFile: File | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef;
  constructor(private fb: FormBuilder, private http: HttpClient, private scriptManager: JobberService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: [''],            // optional
      service: [''],            // optional
      heardFrom: [''],          // optional
      additionalInfo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.scriptManager.injectJobberForm(
      '6ab4598d-6f5c-437d-bf3e-8d78533e1824',
      'https://clienthub.getjobber.com/client_hubs/6ab4598d-6f5c-437d-bf3e-8d78533e1824/public/work_request/embedded_work_request_form'
    );
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.contactForm.get('name')?.value || '');
    formData.append('email', this.contactForm.get('email')?.value || '');
    formData.append('phone', this.contactForm.get('phone')?.value || '');
    formData.append('service', this.contactForm.get('service')?.value || '');
    formData.append('heardFrom', this.contactForm.get('heardFrom')?.value || '');
    formData.append('proposal', this.contactForm.get('additionalInfo')?.value || '');
    formData.append('businessEmail', 'gsealcoating@gmail.com'); // Set target email address

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.http.post('https://twg-template-submission-92b1532f00c1.herokuapp.com/send-email-universal', formData).subscribe({
      next: (res: any) => {
        alert('Message sent!');
        this.contactForm.reset();
        this.selectedFile = null;
        this.fileInput.nativeElement.value = '';
      },
      error: (err: any) => {
        alert('Failed to send message.');
        console.error(err);
      }
    });
  }
}
