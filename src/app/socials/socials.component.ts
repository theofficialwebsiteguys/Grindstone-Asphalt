import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {
 @Output() close = new EventEmitter<void>();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Prevent background scroll
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  ngOnDestroy(): void {
    // Restore scroll when modal is destroyed
    this.renderer.removeStyle(document.body, 'overflow');
  }

  onClose() {
    this.close.emit();
  }
}
