import {Component, OnInit} from '@angular/core';
import {Project} from '../project';
import {PROJECTS} from '../mock-projects';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  project: Project = {
    id: 1,
    name: 'FYS'
  };
  selectedProject: Project;

  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  constructor(private projectService: ProjectService) {
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  ngOnInit() {
    this.getProjects();
  }

}
