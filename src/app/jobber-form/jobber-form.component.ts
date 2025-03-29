import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-jobber-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobber-form.component.html',
  styleUrl: './jobber-form.component.scss'
})
export class JobberFormComponent {
  @Output() close = new EventEmitter<void>();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Prevent background scroll
    this.renderer.setStyle(document.body, 'overflow', 'hidden');

    // Inject CSS
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
    link.media = 'screen';
    this.renderer.appendChild(document.head, link);

    // Inject script
    const script = this.renderer.createElement('script');
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    script.setAttribute('clienthub_id', '6ab4598d-6f5c-437d-bf3e-8d78533e1824');
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/6ab4598d-6f5c-437d-bf3e-8d78533e1824/public/work_request/embedded_work_request_form');
    this.renderer.appendChild(document.body, script);
  }

  ngOnDestroy(): void {
    // Restore scroll when modal is destroyed
    this.renderer.removeStyle(document.body, 'overflow');
  }

  onClose() {
    this.close.emit();
  }
}
