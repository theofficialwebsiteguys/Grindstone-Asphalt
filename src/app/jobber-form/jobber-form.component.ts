import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { JobberService } from '../jobber.service';

@Component({
  selector: 'app-jobber-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobber-form.component.html',
  styleUrl: './jobber-form.component.scss'
})
export class JobberFormComponent {
  @Output() close = new EventEmitter<void>();

  constructor(private scriptManager: JobberService) {}

  ngOnInit(): void {
    this.scriptManager.disableScroll();
    this.scriptManager.injectJobberForm(
      '6ab4598d-6f5c-437d-bf3e-8d78533e1824',
      'https://clienthub.getjobber.com/client_hubs/6ab4598d-6f5c-437d-bf3e-8d78533e1824/public/work_request/embedded_work_request_form'
    );
  }

  ngOnDestroy(): void {
    // Restore scroll when modal is destroyed
    this.scriptManager.enableScroll();
  }

  onClose() {
    this.close.emit();
  }
}
