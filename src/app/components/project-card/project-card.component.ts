import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  
  @Output() viewDetails = new EventEmitter<Project>();

  onViewDetailsClick(): void {
    this.viewDetails.emit(this.project);
  }
}
