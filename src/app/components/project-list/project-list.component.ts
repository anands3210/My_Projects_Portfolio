import { Component, OnInit } from '@angular/core';
import { Project } from '../../project.model';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, ProjectModalComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = [];

  selectedProject: Project | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.allProjects = this.projectService.getProjects();
    this.filteredProjects = this.allProjects;
    // Get unique categories for the filter buttons
    const allCategories = this.allProjects.flatMap(p => p.category);
    this.categories = ['All', ...new Set(allCategories)];
  }

  filterByCategory(category: string): void {
    if (category === 'All') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.allProjects.filter(p => p.category.includes(category));
    }
  }

  searchProjects(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProjects = this.allProjects.filter(p =>
      p.title.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.techStack.join(' ').toLowerCase().includes(searchTerm)
    );
  }

  onViewDetails(project: Project): void {
    this.selectedProject = project;
  }

  onCloseModal(): void {
    this.selectedProject = null;
  }
}
