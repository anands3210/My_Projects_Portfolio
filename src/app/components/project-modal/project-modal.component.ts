import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../project.model';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
  animations: [
    // Animation for the backdrop
    trigger('backdrop', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ]),
    // Animation for the modal panel
    trigger('modal', [
      state('void', style({ opacity: 0, transform: 'translateY(-50px) scale(0.9)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
      transition('void <=> *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  ]
})
export class ProjectModalComponent {
  @Input() project!: Project;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
